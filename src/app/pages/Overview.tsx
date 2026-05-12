import { useNavigate } from "react-router";
import Map from "../components/Map";
import { ArrowLeft } from "lucide-react";
import { dongs, getFacilityStatus } from "../data/dongData";

export default function Overview() {
  const navigate = useNavigate();

  const excessDongs = dongs.filter((d) => getFacilityStatus(d) === "excess");
  const shortageDongs = dongs.filter((d) => getFacilityStatus(d) === "shortage");

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>돌아가기</span>
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">한눈에 보기</h1>
          <p className="text-gray-500">성남시 공공시설 수요 현황을 한눈에 파악하세요</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-sm border border-blue-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">시설 과잉 지역</h2>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <span className="text-sm text-gray-600">과잉</span>
                </div>
              </div>

              <div className="h-96 mb-6 overflow-hidden rounded-2xl">
                <Map interactive={false} highlightMode="excess" />
              </div>

              {excessDongs.length > 0 ? (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {excessDongs.map((dong) => (
                    <div
                      key={dong.id}
                      className="bg-white rounded-2xl p-4 border border-blue-200"
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">{dong.name}</h3>
                      <p className="text-xs text-gray-500 mb-1">{dong.district}</p>
                      <p className="text-sm text-gray-600">
                        평균 수요 점수:{" "}
                        {(
                          (dong.demand.children + dong.demand.youth + dong.demand.elderly) /
                          3
                        ).toFixed(0)}
                        점
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        시설 재배치 또는 다목적 활용을 고려하세요
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-6 text-center border border-blue-200">
                  <p className="text-gray-500">시설이 과잉 공급된 지역이 없습니다</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 shadow-sm border border-red-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">시설 부족 지역</h2>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-400 rounded"></div>
                  <span className="text-sm text-gray-600">부족</span>
                </div>
              </div>

              <div className="h-96 mb-6 overflow-hidden rounded-2xl">
                <Map interactive={false} highlightMode="shortage" />
              </div>

              {shortageDongs.length > 0 ? (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {shortageDongs.map((dong) => (
                    <div
                      key={dong.id}
                      className="bg-white rounded-2xl p-4 border border-red-200"
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">{dong.name}</h3>
                      <p className="text-xs text-gray-500 mb-1">{dong.district}</p>
                      <p className="text-sm text-gray-600">
                        평균 수요 점수:{" "}
                        {(
                          (dong.demand.children + dong.demand.youth + dong.demand.elderly) /
                          3
                        ).toFixed(0)}
                        점
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        추가 시설 건립이 필요합니다
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-6 text-center border border-red-200">
                  <p className="text-gray-500">시설이 부족한 지역이 없습니다</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
