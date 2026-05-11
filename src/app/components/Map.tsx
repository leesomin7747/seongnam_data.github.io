import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { dongs, Dong, getFacilityStatus } from "../data/dongData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import mapImage from "../../imports/img_map_city.png";

const STORAGE_KEY = "sn_hot_overrides_v1";

interface MapProps {
  interactive?: boolean;
  highlightMode?: "excess" | "shortage" | null;
}

const copy = (text: string) => {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch {}
  document.body.removeChild(ta);
  if (!ok) navigator.clipboard?.writeText(text).catch(() => {});
};

export default function Map({ interactive = true, highlightMode = null }: MapProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<Dong | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const [calibMode, setCalibMode] = useState(false);
  const [overrides, setOverrides] = useState<Record<string, { x: number; y: number }>>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}"); } catch { return {}; }
  });
  const dragging = useRef<{
    id: string;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);

  useEffect(() => {
    if (!interactive) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "c" || e.key === "C") setCalibMode((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [interactive]);

  const saveOverrides = (next: Record<string, { x: number; y: number }>) => {
    setOverrides(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const hotOf = useCallback(
    (dong: Dong) => overrides[dong.id] ?? dong.hot,
    [overrides]
  );

  const onDotMouseDown = (e: React.MouseEvent, dong: Dong) => {
    if (!calibMode) return;
    e.preventDefault();
    const h = hotOf(dong);
    dragging.current = {
      id: dong.id,
      startX: e.clientX,
      startY: e.clientY,
      origX: h.x,
      origY: h.y,
    };
    const wrap = wrapRef.current;
    if (!wrap) return;
    const W = wrap.clientWidth;
    const H = wrap.clientHeight;

    const onMove = (me: MouseEvent) => {
      if (!dragging.current) return;
      const dx = ((me.clientX - dragging.current.startX) / W) * 100;
      const dy = ((me.clientY - dragging.current.startY) / H) * 100;
      saveOverrides({
        ...overrides,
        [dragging.current.id]: {
          x: Math.round((dragging.current.origX + dx) * 100) / 100,
          y: Math.round((dragging.current.origY + dy) * 100) / 100,
        },
      });
    };
    const onUp = () => {
      dragging.current = null;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const exportChanges = () => {
    const lines = dongs
      .filter((d) => overrides[d.id])
      .map((d) => `  { id: "${d.id}", hot: { x: ${overrides[d.id].x}, y: ${overrides[d.id].y} } }`);
    if (lines.length === 0) {
      alert("변경된 좌표가 없습니다.");
      return;
    }
    copy(lines.join(",\n"));
    alert(`${lines.length}개 동 좌표가 클립보드에 복사되었습니다.`);
  };

  const getDotColor = (dong: Dong) => {
    const status = getFacilityStatus(dong);
    if (calibMode) return "#f59e0b";
    if (!highlightMode) return hover?.id === dong.id ? "#0EA5E9" : "#3b82f6";
    if (highlightMode === "shortage") return status === "shortage" ? "#ef4444" : "#94a3b8";
    if (highlightMode === "excess")   return status === "excess"   ? "#3b82f6" : "#94a3b8";
    return "#3b82f6";
  };

  const getDotSize = (dong: Dong) => {
    if (calibMode) return 12;
    return hover?.id === dong.id ? 16 : 11;
  };

  const chartData = hover
    ? [
        { name: "아동", value: hover.population.children / 1000 },
        { name: "청년", value: hover.population.youth / 1000 },
        { name: "노인", value: hover.population.elderly / 1000 },
      ]
    : [];

  return (
    <div className="relative w-full">
      <div
        ref={wrapRef}
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "580 / 690" }}
        onMouseLeave={() => { if (!calibMode) setHover(null); }}
      >
        <img
          src={mapImage}
          alt="성남시 행정구역 지도"
          className="absolute inset-0 w-full h-full object-contain"
          draggable={false}
        />

        {dongs.map((dong) => {
          const h = hotOf(dong);
          const color = getDotColor(dong);
          const size = getDotSize(dong);
          const isHovered = hover?.id === dong.id;

          return (
            <div
              key={dong.id}
              className="absolute"
              style={{
                left: `${h.x}%`,
                top: `${h.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: isHovered ? 20 : 10,
                cursor: calibMode ? "grab" : interactive ? "pointer" : "default",
              }}
              onMouseEnter={(e) => {
                if (calibMode) return;
                const rect = wrapRef.current!.getBoundingClientRect();
                setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                setHover(dong);
              }}
              onMouseMove={(e) => {
                if (calibMode || !hover) return;
                const rect = wrapRef.current!.getBoundingClientRect();
                setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseLeave={() => { if (!calibMode) setHover(null); }}
              onClick={() => { if (interactive && !calibMode) navigate(`/district/${dong.id}`); }}
              onMouseDown={(e) => onDotMouseDown(e, dong)}
            >
              {/* 항상 보이는 외곽 halo 링 */}
              {!calibMode && (
                <div
                  className="absolute rounded-full pointer-events-none transition-all duration-150"
                  style={{
                    width: isHovered ? size + 16 : size + 10,
                    height: isHovered ? size + 16 : size + 10,
                    top: isHovered ? -8 : -5,
                    left: isHovered ? -8 : -5,
                    backgroundColor: `${color}28`,
                    border: `1.5px solid ${color}70`,
                  }}
                />
              )}

              {/* 호버 시 ping 애니메이션 */}
              {isHovered && !calibMode && (
                <span
                  className="absolute rounded-full animate-ping pointer-events-none"
                  style={{
                    width: size + 16,
                    height: size + 16,
                    top: -8,
                    left: -8,
                    backgroundColor: color,
                    opacity: 0.2,
                  }}
                />
              )}

              {/* 내부 dot */}
              <div
                className="rounded-full transition-all duration-150"
                style={{
                  width: size,
                  height: size,
                  backgroundColor: color,
                  border: "2px solid white",
                  boxShadow: isHovered && !calibMode
                    ? `0 0 0 2px ${color}55, 0 3px 10px rgba(0,0,0,0.45)`
                    : `0 2px 5px rgba(0,0,0,0.5)`,
                  opacity: calibMode ? 0.9 : 1,
                }}
              />

              {isHovered && !calibMode && (
                <div
                  className="absolute whitespace-nowrap text-xs font-semibold bg-gray-900 text-white rounded-md px-2 py-1 pointer-events-none"
                  style={{
                    bottom: "calc(100% + 6px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  {dong.name}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-0 h-0"
                    style={{
                      top: "100%",
                      borderLeft: "5px solid transparent",
                      borderRight: "5px solid transparent",
                      borderTop: "5px solid #111827",
                    }}
                  />
                </div>
              )}

              {calibMode && (
                <div
                  className="absolute whitespace-nowrap text-xs font-medium text-amber-800 pointer-events-none"
                  style={{
                    bottom: "calc(100% + 3px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  {dong.name}
                </div>
              )}
            </div>
          );
        })}

        {/* 호버 툴팁 */}
        {hover && interactive && !calibMode && (() => {
          const W = wrapRef.current?.clientWidth ?? 600;
          const H = wrapRef.current?.clientHeight ?? 690;
          const TW = 280, TH = 190;
          const flipX = pos.x + 20 + TW > W - 8;
          const flipY = pos.y + 20 + TH > H - 8;
          const left = flipX ? Math.max(8, pos.x - 20 - TW) : Math.min(W - TW - 8, pos.x + 20);
          const top  = flipY ? Math.max(8, pos.y - 20 - TH) : pos.y + 20;
          return (
            <div
              className="absolute bg-white rounded-2xl shadow-xl p-4 pointer-events-none z-30"
              style={{ left, top, width: TW }}
            >
              <h3 className="font-semibold text-gray-800 mb-1">{hover.name} 인구 분포</h3>
              <p className="text-xs text-gray-500 mb-3">{hover.district}</p>
              <ResponsiveContainer width="100%" height={110}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Bar dataKey="value" fill="#0EA5E9" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-400 mt-1">단위: 천 명</p>
            </div>
          );
        })()}

        {/* 캘리브레이션 모드 안내 배너 */}
        {calibMode && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow z-30 pointer-events-none">
            캘리브레이션 모드 — 핫스팟을 드래그해서 위치 조정
          </div>
        )}

        {/* 캘리브레이션 액션 버튼 */}
        {calibMode && (
          <div className="absolute bottom-3 right-3 flex flex-col gap-2 z-30">
            <button
              onClick={exportChanges}
              className="px-3 py-1.5 bg-amber-500 text-white text-xs font-medium rounded-lg shadow hover:bg-amber-600"
            >
              좌표 복사
            </button>
            <button
              onClick={() => saveOverrides({})}
              className="px-3 py-1.5 bg-gray-500 text-white text-xs font-medium rounded-lg shadow hover:bg-gray-600"
            >
              전체 초기화
            </button>
          </div>
        )}
      </div>

      {/* 캘리브레이션 토글 버튼 — interactive 모드에서만 표시 */}
      {interactive && (
        <button
          onClick={() => setCalibMode((v) => !v)}
          className="absolute bottom-3 left-3 w-8 h-8 rounded-full text-xs font-bold shadow flex items-center justify-center z-30 transition-colors"
          style={{
            background: calibMode ? "#f59e0b" : "#e5e7eb",
            color: calibMode ? "white" : "#6b7280",
          }}
          title="캘리브레이션 모드 토글 (단축키: C)"
        >
          C
        </button>
      )}
    </div>
  );
}
