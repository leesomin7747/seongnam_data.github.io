import { useState } from "react";
import { useNavigate } from "react-router";
import { dongs, Dong } from "../data/dongData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import mapImage from "../../imports/img_map_city.png";

interface MapProps {
  interactive?: boolean;
  highlightMode?: "excess" | "shortage" | null;
}

export default function Map({ interactive = true, highlightMode = null }: MapProps) {
  const [hoveredDong, setHoveredDong] = useState<Dong | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<SVGGElement>, dong: Dong) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredDong(dong);
  };

  const handleClick = (dong: Dong) => {
    if (interactive) {
      navigate(`/district/${dong.id}`);
    }
  };

  const getDongColor = (dong: Dong) => {
    const avgDemand = (dong.demand.children + dong.demand.youth + dong.demand.elderly) / 3;

    if (!highlightMode) {
      return hoveredDong?.id === dong.id ? "rgba(14, 165, 233, 0.3)" : "transparent";
    }

    if (highlightMode === "shortage") {
      if (avgDemand > 80) return "rgba(252, 165, 165, 0.6)";
      return "rgba(243, 244, 246, 0.3)";
    }

    if (highlightMode === "excess") {
      if (avgDemand < 70) return "rgba(147, 197, 253, 0.6)";
      return "rgba(243, 244, 246, 0.3)";
    }

    return "transparent";
  };

  const chartData = hoveredDong
    ? [
        { name: "아동", value: hoveredDong.population.children / 1000 },
        { name: "청년", value: hoveredDong.population.youth / 1000 },
        { name: "노인", value: hoveredDong.population.elderly / 1000 },
      ]
    : [];

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-full">
        <img src={mapImage} alt="성남시 행정구역 지도" className="w-full h-full object-contain" />
        <svg
          viewBox="0 0 580 690"
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        >
          <g style={{ pointerEvents: "auto" }}>
            {dongs.map((dong) => (
              <g
                key={dong.id}
                onMouseMove={(e) => handleMouseMove(e, dong)}
                onMouseLeave={() => setHoveredDong(null)}
                onClick={() => handleClick(dong)}
                style={{ cursor: interactive ? "pointer" : "default" }}
              >
                <polygon
                  points={dong.coordinates.map((c) => `${c.x},${c.y}`).join(" ")}
                  fill={getDongColor(dong)}
                  stroke="transparent"
                  strokeWidth="0"
                  className="transition-all duration-200"
                />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {hoveredDong && interactive && (
        <div
          className="absolute bg-white rounded-2xl shadow-lg p-4 pointer-events-none z-10"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y + 20,
            width: "280px",
          }}
        >
          <h3 className="font-semibold text-gray-800 mb-1">{hoveredDong.name} 인구 분포</h3>
          <p className="text-xs text-gray-500 mb-3">{hoveredDong.district}</p>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Bar dataKey="value" fill="#0EA5E9" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-2">단위: 천 명</p>
        </div>
      )}
    </div>
  );
}
