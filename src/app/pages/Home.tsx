import { Link } from "react-router";
import Map from "../components/Map";
import {
  getTotalPopulation,
  getTotalChildren,
  getTotalYouth,
  getTotalElderly,
} from "../data/dongData";
import { Users, Baby, Briefcase, Heart } from "lucide-react";

export default function Home() {
  const totalPopulation = getTotalPopulation();
  const totalChildren = getTotalChildren();
  const totalYouth = getTotalYouth();
  const totalElderly = getTotalElderly();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              성남시 공공시설 수요 분석
            </h1>
            <p className="text-gray-500">
              각 동을 클릭하여 상세 분석을 확인하세요
            </p>
          </div>
          <Link
            to="/overview"
            className="px-6 py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors"
          >
            한눈에 보기
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-3xl p-8 shadow-sm border border-sky-100" style={{ minHeight: "280px" }}>
              <div className="flex flex-col justify-center h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-base text-gray-500">총 인구</p>
                    <p className="text-5xl font-semibold text-gray-900">
                      {(totalPopulation / 10000).toFixed(0)}만 명
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-6 shadow-sm border border-pink-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center mb-3">
                    <Baby className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-gray-500 mb-2">아동 인구</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {(totalChildren / 10000).toFixed(1)}만
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-6 shadow-sm border border-purple-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-3">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-gray-500 mb-2">청년 인구</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {(totalYouth / 10000).toFixed(0)}만
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-6 shadow-sm border border-orange-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-gray-500 mb-2">노인 인구</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {(totalElderly / 10000).toFixed(1)}만
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">성남시 행정구역 지도</h2>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
