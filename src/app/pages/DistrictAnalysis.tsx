import { useParams, useNavigate } from "react-router";
import { dongs, getRecommendations } from "../data/dongData";
import { ArrowLeft, TrendingUp, AlertCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

export default function DistrictAnalysis() {
  const { districtId } = useParams();
  const navigate = useNavigate();

  const dong = dongs.find((d) => d.id === districtId);

  if (!dong) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">해당 지역을 찾을 수 없습니다</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const recommendations = getRecommendations(dong);

  const demandData = [
    { name: "아동 시설", value: dong.demand.children, color: "#EC4899" },
    { name: "청년 시설", value: dong.demand.youth, color: "#A855F7" },
    { name: "노인 시설", value: dong.demand.elderly, color: "#FB923C" },
  ];

  const getPriorityBadge = (priority: string) => {
    if (priority === "high") {
      return (
        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
          높음
        </span>
      );
    }
    return (
      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
        보통
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-8 py-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>돌아가기</span>
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">{dong.name} 시설 수요 분석</h1>
          <p className="text-gray-500">{dong.district} · 총 인구 {(dong.population.total / 10000).toFixed(1)}만 명</p>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-white rounded-3xl p-8 shadow-sm border border-sky-100 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-sky-600" />
            <h2 className="text-xl font-semibold text-gray-900">시설 수요 점수</h2>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={demandData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 14 }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 14 }} width={100} />
              <Bar dataKey="value" radius={[0, 12, 12, 0]}>
                {demandData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <p className="text-sm text-gray-500 mt-4">
            * 수요 점수가 높을수록 해당 연령층을 위한 시설이 부족함을 의미합니다
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-sky-600" />
            <h2 className="text-xl font-semibold text-gray-900">정책 제안</h2>
          </div>

          {recommendations.length === 0 ? (
            <div className="bg-gray-50 rounded-3xl p-8 text-center">
              <p className="text-gray-500">현재 특별한 정책 제안이 없습니다</p>
            </div>
          ) : (
            recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{rec.title}</h3>
                  {getPriorityBadge(rec.priority)}
                </div>
                <p className="text-gray-600 leading-relaxed">{rec.description}</p>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
            <p className="text-sm text-pink-700 mb-1">아동 시설</p>
            <p className="text-2xl font-semibold text-pink-900">{dong.facilities.childcare}개</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <p className="text-sm text-purple-700 mb-1">청년 시설</p>
            <p className="text-2xl font-semibold text-purple-900">{dong.facilities.youthCenter}개</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
            <p className="text-sm text-orange-700 mb-1">노인 시설</p>
            <p className="text-2xl font-semibold text-orange-900">{dong.facilities.elderlyCenter}개</p>
          </div>
        </div>
      </div>
    </div>
  );
}
