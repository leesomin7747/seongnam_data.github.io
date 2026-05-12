export interface Dong {
  id: string;
  name: string;
  district: "수정구" | "중원구" | "분당구";
  hot: { x: number; y: number };
  population: {
    total: number;
    children: number;
    youth: number;
    elderly: number;
  };
  facilities: {
    childcare: number;
    youthCenter: number;
    elderlyCenter: number;
  };
  demand: {
    children: number;
    youth: number;
    elderly: number;
  };
  coordinates: { x: number; y: number }[];
}

export const dongs: Dong[] = [

  // 수정구
  {
    id: "sinheung1",
    name: "신흥1동",
    district: "수정구",
    hot: { x: 65.11, y: 30.49 },
    population: { total: 18000, children: 2400, youth: 42331, elderly: 3114 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 70, youth: 85.0, elderly: 54.4 },
    coordinates: [{ x: 50, y: 50 }, { x: 120, y: 50 }, { x: 120, y: 110 }, { x: 50, y: 110 }],
  },
  {
    id: "sinheung2",
    name: "신흥2동",
    district: "수정구",
    hot: { x: 68.98, y: 25.16 },
    population: { total: 16000, children: 2200, youth: 93191, elderly: 5183 },
    facilities: { childcare: 2, youthCenter: 0, elderlyCenter: 0 },
    demand: { children: 75, youth: 85.0, elderly: 97.1 },
    coordinates: [{ x: 120, y: 50 }, { x: 190, y: 50 }, { x: 190, y: 110 }, { x: 120, y: 110 }],
  },
  {
    id: "sinheung3",
    name: "신흥3동",
    district: "수정구",
    hot: { x: 67.57, y: 29.46 },
    population: { total: 14500, children: 2000, youth: 184268, elderly: 2572 },
    facilities: { childcare: 1, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 72, youth: 85.0, elderly: 43.3 },
    coordinates: [{ x: 190, y: 50 }, { x: 260, y: 50 }, { x: 260, y: 110 }, { x: 190, y: 110 }],
  },
  {
    id: "taepyeong1",
    name: "태평1동",
    district: "수정구",
    hot: { x: 55.71, y: 27.79 },
    population: { total: 19000, children: 2600, youth: 48746, elderly: 3549 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 68, youth: 85.0, elderly: 48.6 },
    coordinates: [{ x: 50, y: 110 }, { x: 120, y: 110 }, { x: 120, y: 170 }, { x: 50, y: 170 }],
  },
  {
    id: "taepyeong2",
    name: "태평2동",
    district: "수정구",
    hot: { x: 62.87, y: 26.0 },
    population: { total: 17500, children: 2400, youth: 2599, elderly: 3341 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 71, youth: 85.0, elderly: 45.2 },
    coordinates: [{ x: 120, y: 110 }, { x: 190, y: 110 }, { x: 190, y: 170 }, { x: 120, y: 170 }],
  },
  {
    id: "taepyeong3",
    name: "태평3동",
    district: "수정구",
    hot: { x: 60.77, y: 27.98 },
    population: { total: 15800, children: 2200, youth: 3528, elderly: 3013 },
    facilities: { childcare: 2, youthCenter: 0, elderlyCenter: 1 },
    demand: { children: 74, youth: 85.0, elderly: 39.8 },
    coordinates: [{ x: 190, y: 110 }, { x: 260, y: 110 }, { x: 260, y: 170 }, { x: 190, y: 170 }],
  },
  {
    id: "taepyeong4",
    name: "태평4동",
    district: "수정구",
    hot: { x: 65.05, y: 25.58 },
    population: { total: 16200, children: 2300, youth: 5811, elderly: 2627 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 73, youth: 58.0, elderly: 33.5 },
    coordinates: [{ x: 50, y: 170 }, { x: 120, y: 170 }, { x: 120, y: 230 }, { x: 50, y: 230 }],
  },
  {
    id: "sujin1",
    name: "수진1동",
    district: "수정구",
    hot: { x: 62.59, y: 31.65 },
    population: { total: 20000, children: 2800, youth: 5520, elderly: 3166 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 4 },
    demand: { children: 67, youth: 85.0, elderly: 26.0 },
    coordinates: [{ x: 120, y: 170 }, { x: 190, y: 170 }, { x: 190, y: 230 }, { x: 120, y: 230 }],
  },
  {
    id: "sujin2",
    name: "수진2동",
    district: "수정구",
    hot: { x: 55.9, y: 33.42 },
    population: { total: 18500, children: 2600, youth: 3707, elderly: 3952 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 69, youth: 85.0, elderly: 49.8 },
    coordinates: [{ x: 190, y: 170 }, { x: 260, y: 170 }, { x: 260, y: 230 }, { x: 190, y: 230 }],
  },
  {
    id: "dandae",
    name: "단대동",
    district: "수정구",
    hot: { x: 73.73, y: 22.45 },
    population: { total: 17000, children: 2400, youth: 5088, elderly: 3284 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 72, youth: 85.0, elderly: 57.9 },
    coordinates: [{ x: 50, y: 230 }, { x: 155, y: 230 }, { x: 155, y: 280 }, { x: 50, y: 280 }],
  },
  {
    id: "sanseong",
    name: "산성동",
    district: "수정구",
    hot: { x: 71.17, y: 22.32 },
    population: { total: 19500, children: 2700, youth: 2729, elderly: 1121 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 68, youth: 85.0, elderly: 9.9 },
    coordinates: [{ x: 155, y: 230 }, { x: 260, y: 230 }, { x: 260, y: 280 }, { x: 155, y: 280 }],
  },

  // 중원구
  {
    id: "yangji",
    name: "양지동",
    district: "중원구",
    hot: { x: 78.96, y: 17.79 },
    population: { total: 21000, children: 3000, youth: 4721, elderly: 2183 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 66, youth: 58.0, elderly: 35.2 },
    coordinates: [{ x: 260, y: 50 }, { x: 330, y: 50 }, { x: 330, y: 110 }, { x: 260, y: 110 }],
  },
  {
    id: "bokjeong",
    name: "복정동",
    district: "중원구",
    hot: { x: 59.3, y: 20.37 },
    population: { total: 24000, children: 3500, youth: 5222, elderly: 1356 },
    facilities: { childcare: 4, youthCenter: 2, elderlyCenter: 2 },
    demand: { children: 70, youth: 58.0, elderly: 8.4 },
    coordinates: [{ x: 330, y: 50 }, { x: 400, y: 50 }, { x: 400, y: 110 }, { x: 330, y: 110 }],
  },
  {
    id: "wirye",
    name: "위례동",
    district: "중원구",
    hot: { x: 68.01, y: 16.14 },
    population: { total: 32000, children: 5200, youth: 3584, elderly: 7203 },
    facilities: { childcare: 6, youthCenter: 2, elderlyCenter: 2 },
    demand: { children: 82, youth: 85.0, elderly: 98.8 },
    coordinates: [{ x: 400, y: 50 }, { x: 490, y: 50 }, { x: 490, y: 140 }, { x: 400, y: 140 }],
  },
  {
    id: "sinchon",
    name: "신촌동",
    district: "중원구",
    hot: { x: 47.61, y: 25.39 },
    population: { total: 16500, children: 2300, youth: 4955, elderly: 608 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 68, youth: 85.0, elderly: 2.8 },
    coordinates: [{ x: 260, y: 110 }, { x: 330, y: 110 }, { x: 330, y: 170 }, { x: 260, y: 170 }],
  },
  {
    id: "godeung",
    name: "고등동",
    district: "중원구",
    hot: { x: 38.91, y: 35.08 },
    population: { total: 18000, children: 2600, youth: 837, elderly: 1810 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 70, youth: 85.0, elderly: 27.6 },
    coordinates: [{ x: 330, y: 110 }, { x: 400, y: 110 }, { x: 400, y: 170 }, { x: 330, y: 170 }],
  },
  {
    id: "siheung",
    name: "시흥동",
    district: "중원구",
    hot: { x: 34.9, y: 49.1 },
    population: { total: 19200, children: 2700, youth: 4351, elderly: 729 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 69, youth: 85.0, elderly: 0.0 },
    coordinates: [{ x: 400, y: 140 }, { x: 490, y: 140 }, { x: 490, y: 210 }, { x: 400, y: 210 }],
  },
  {
    id: "seongnam",
    name: "성남동",
    district: "중원구",
    hot: { x: 57.58, y: 37.32 },
    population: { total: 17800, children: 2500, youth: 4440, elderly: 7149 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 6 },
    demand: { children: 71, youth: 85.0, elderly: 46.1 },
    coordinates: [{ x: 260, y: 170 }, { x: 330, y: 170 }, { x: 330, y: 230 }, { x: 260, y: 230 }],
  },
  {
    id: "jungang",
    name: "중앙동",
    district: "중원구",
    hot: { x: 70.28, y: 31.18 },
    population: { total: 20500, children: 2900, youth: 524, elderly: 3220 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 67, youth: 85.0, elderly: 56.6 },
    coordinates: [{ x: 330, y: 170 }, { x: 400, y: 170 }, { x: 400, y: 230 }, { x: 330, y: 230 }],
  },
  {
    id: "geumgwang1",
    name: "금광1동",
    district: "중원구",
    hot: { x: 78.3, y: 28.03 },
    population: { total: 18800, children: 2700, youth: 2014, elderly: 2897 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 70, youth: 85.0, elderly: 33.9 },
    coordinates: [{ x: 400, y: 210 }, { x: 490, y: 210 }, { x: 490, y: 270 }, { x: 400, y: 270 }],
  },
  {
    id: "geumgwang2",
    name: "금광2동",
    district: "중원구",
    hot: { x: 76.91, y: 26.9 },
    population: { total: 17500, children: 2500, youth: 6373, elderly: 5325 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 72, youth: 58.0, elderly: 100.0 },
    coordinates: [{ x: 260, y: 230 }, { x: 330, y: 230 }, { x: 330, y: 280 }, { x: 260, y: 280 }],
  },
  {
    id: "eunhaeng1",
    name: "은행1동",
    district: "중원구",
    hot: { x: 80.88, y: 25.54 },
    population: { total: 19800, children: 2800, youth: 3472, elderly: 1912 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 68, youth: 58.0, elderly: 29.7 },
    coordinates: [{ x: 330, y: 230 }, { x: 400, y: 230 }, { x: 400, y: 280 }, { x: 330, y: 280 }],
  },
  {
    id: "eunhaeng2",
    name: "은행2동",
    district: "중원구",
    hot: { x: 84.43, y: 20.6 },
    population: { total: 18200, children: 2600, youth: 8361, elderly: 5245 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 71, youth: 58.0, elderly: 98.4 },
    coordinates: [{ x: 400, y: 270 }, { x: 490, y: 270 }, { x: 490, y: 320 }, { x: 400, y: 320 }],
  },
  {
    id: "sangdaewon1",
    name: "상대원1동",
    district: "중원구",
    hot: { x: 85.31, y: 33.18 },
    population: { total: 21500, children: 3100, youth: 3523, elderly: 5274 },
    facilities: { childcare: 3, youthCenter: 2, elderlyCenter: 2 },
    demand: { children: 66, youth: 58.0, elderly: 60.8 },
    coordinates: [{ x: 260, y: 280 }, { x: 330, y: 280 }, { x: 330, y: 340 }, { x: 260, y: 340 }],
  },
  {
    id: "sangdaewon2",
    name: "상대원2동",
    district: "중원구",
    hot: { x: 72.93, y: 32.59 },
    population: { total: 19500, children: 2800, youth: 1294, elderly: 711 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 69, youth: 85.0, elderly: 1.9 },
    coordinates: [{ x: 330, y: 280 }, { x: 400, y: 280 }, { x: 400, y: 340 }, { x: 330, y: 340 }],
  },
  {
    id: "sangdaewon3",
    name: "상대원3동",
    district: "중원구",
    hot: { x: 77.64, y: 31.32 },
    population: { total: 18500, children: 2700, youth: 2524, elderly: 2970 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 70, youth: 85.0, elderly: 39.1 },
    coordinates: [{ x: 400, y: 320 }, { x: 490, y: 320 }, { x: 490, y: 380 }, { x: 400, y: 380 }],
  },
  {
    id: "hadaewon",
    name: "하대원동",
    district: "중원구",
    hot: { x: 69.39, y: 38.36 },
    population: { total: 20000, children: 2900, youth: 1988, elderly: 4350 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 68, youth: 85.0, elderly: 61.8 },
    coordinates: [{ x: 260, y: 340 }, { x: 355, y: 340 }, { x: 355, y: 400 }, { x: 260, y: 400 }],
  },
  {
    id: "dochon",
    name: "도촌동",
    district: "중원구",
    hot: { x: 76.52, y: 43.43 },
    population: { total: 17800, children: 2600, youth: 2952, elderly: 4712 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 3 },
    demand: { children: 71, youth: 85.0, elderly: 58.0 },
    coordinates: [{ x: 355, y: 340 }, { x: 490, y: 340 }, { x: 490, y: 400 }, { x: 355, y: 400 }],
  },

  // 분당구
  {
    id: "bundang",
    name: "분당동",
    district: "분당구",
    hot: { x: 66.8, y: 71.14 },
    population: { total: 22000, children: 3200, youth: 1150, elderly: 4309 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 75, youth: 58.0, elderly: 61.1 },
    coordinates: [{ x: 50, y: 280 }, { x: 130, y: 280 }, { x: 130, y: 350 }, { x: 50, y: 350 }],
  },
  {
    id: "sunae1",
    name: "수내1동",
    district: "분당구",
    hot: { x: 52.81, y: 64.04 },
    population: { total: 25000, children: 3800, youth: 1257, elderly: 2572 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 78, youth: 85.0, elderly: 32.6 },
    coordinates: [{ x: 130, y: 280 }, { x: 210, y: 280 }, { x: 210, y: 350 }, { x: 130, y: 350 }],
  },
  {
    id: "sunae2",
    name: "수내2동",
    district: "분당구",
    hot: { x: 57.01, y: 66.43 },
    population: { total: 23500, children: 3500, youth: 2445, elderly: 1244 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 76, youth: 85.0, elderly: 15.9 },
    coordinates: [{ x: 210, y: 280 }, { x: 260, y: 280 }, { x: 260, y: 350 }, { x: 210, y: 350 }],
  },
  {
    id: "sunae3",
    name: "수내3동",
    district: "분당구",
    hot: { x: 59.91, y: 72.28 },
    population: { total: 24000, children: 3600, youth: 6128, elderly: 1555 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 77, youth: 85.0, elderly: 22.3 },
    coordinates: [{ x: 50, y: 350 }, { x: 130, y: 350 }, { x: 130, y: 420 }, { x: 50, y: 420 }],
  },
  {
    id: "jeongja",
    name: "정자동",
    district: "분당구",
    hot: { x: 50.51, y: 70.6 },
    population: { total: 26000, children: 4000, youth: 2315, elderly: 2337 },
    facilities: { childcare: 4, youthCenter: 2, elderlyCenter: 0 },
    demand: { children: 80, youth: 58.0, elderly: 38.4 },
    coordinates: [{ x: 130, y: 350 }, { x: 210, y: 350 }, { x: 210, y: 420 }, { x: 130, y: 420 }],
  },
  {
    id: "jeongja1",
    name: "정자1동",
    district: "분당구",
    hot: { x: 47.62, y: 67.28 },
    population: { total: 24500, children: 3700, youth: 3729, elderly: 4242 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 78, youth: 58.0, elderly: 54.2 },
    coordinates: [{ x: 210, y: 350 }, { x: 260, y: 350 }, { x: 260, y: 420 }, { x: 210, y: 420 }],
  },
  {
    id: "jeongja2",
    name: "정자2동",
    district: "분당구",
    hot: { x: 52.91, y: 71.67 },
    population: { total: 23000, children: 3400, youth: 2673, elderly: 2840 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 76, youth: 85.0, elderly: 37.0 },
    coordinates: [{ x: 50, y: 420 }, { x: 130, y: 420 }, { x: 130, y: 490 }, { x: 50, y: 490 }],
  },
  {
    id: "jeongja3",
    name: "정자3동",
    district: "분당구",
    hot: { x: 55.41, y: 77.01 },
    population: { total: 22500, children: 3300, youth: 5933, elderly: 2514 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 75, youth: 85.0, elderly: 26.6 },
    coordinates: [{ x: 130, y: 420 }, { x: 210, y: 420 }, { x: 210, y: 490 }, { x: 130, y: 490 }],
  },
  {
    id: "seohyeon1",
    name: "서현1동",
    district: "분당구",
    hot: { x: 72.62, y: 59.79 },
    population: { total: 27000, children: 4200, youth: 1790, elderly: 4457 },
    facilities: { childcare: 5, youthCenter: 2, elderlyCenter: 0 },
    demand: { children: 82, youth: 85.0, elderly: 82.1 },
    coordinates: [{ x: 210, y: 420 }, { x: 290, y: 420 }, { x: 290, y: 490 }, { x: 210, y: 490 }],
  },
  {
    id: "seohyeon2",
    name: "서현2동",
    district: "분당구",
    hot: { x: 63.31, y: 66.39 },
    population: { total: 25500, children: 3900, youth: 6689, elderly: 2778 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 79, youth: 85.0, elderly: 47.5 },
    coordinates: [{ x: 290, y: 420 }, { x: 370, y: 420 }, { x: 370, y: 490 }, { x: 290, y: 490 }],
  },
  {
    id: "imae1",
    name: "이매1동",
    district: "분당구",
    hot: { x: 63.02, y: 55.5 },
    population: { total: 23800, children: 3600, youth: 7818, elderly: 3969 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 0 },
    demand: { children: 77, youth: 58.0, elderly: 72.1 },
    coordinates: [{ x: 370, y: 400 }, { x: 450, y: 400 }, { x: 450, y: 460 }, { x: 370, y: 460 }],
  },
  {
    id: "imae2",
    name: "이매2동",
    district: "분당구",
    hot: { x: 55.7, y: 53.8 },
    population: { total: 22000, children: 3300, youth: 2280, elderly: 2433 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 75, youth: 85.0, elderly: 26.9 },
    coordinates: [{ x: 450, y: 400 }, { x: 530, y: 400 }, { x: 530, y: 460 }, { x: 450, y: 460 }],
  },
  {
    id: "yatap1",
    name: "야탑1동",
    district: "분당구",
    hot: { x: 56.71, y: 44.98 },
    population: { total: 26500, children: 4100, youth: 4411, elderly: 3405 },
    facilities: { childcare: 5, youthCenter: 2, elderlyCenter: 0 },
    demand: { children: 81, youth: 85.0, elderly: 60.4 },
    coordinates: [{ x: 370, y: 460 }, { x: 450, y: 460 }, { x: 450, y: 530 }, { x: 370, y: 530 }],
  },
  {
    id: "yatap2",
    name: "야탑2동",
    district: "분당구",
    hot: { x: 58.31, y: 48.51 },
    population: { total: 24800, children: 3800, youth: 4694, elderly: 3486 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 3 },
    demand: { children: 78, youth: 85.0, elderly: 40.4 },
    coordinates: [{ x: 450, y: 460 }, { x: 530, y: 460 }, { x: 530, y: 530 }, { x: 450, y: 530 }],
  },
  {
    id: "yatap3",
    name: "야탑3동",
    district: "분당구",
    hot: { x: 70.91, y: 50.98 },
    population: { total: 23200, children: 3500, youth: 2138, elderly: 5447 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 76, youth: 58.0, elderly: 79.9 },
    coordinates: [{ x: 290, y: 490 }, { x: 370, y: 490 }, { x: 370, y: 550 }, { x: 290, y: 550 }],
  },
  {
    id: "pangyo",
    name: "판교동",
    district: "분당구",
    hot: { x: 41.1, y: 57.5 },
    population: { total: 28000, children: 4500, youth: 7045, elderly: 3080 },
    facilities: { childcare: 5, youthCenter: 2, elderlyCenter: 0 },
    demand: { children: 85, youth: 58.0, elderly: 53.7 },
    coordinates: [{ x: 50, y: 490 }, { x: 145, y: 490 }, { x: 145, y: 570 }, { x: 50, y: 570 }],
  },
  {
    id: "sampyeong",
    name: "삼평동",
    district: "분당구",
    hot: { x: 48.4, y: 52.0 },
    population: { total: 30000, children: 5000, youth: 3145, elderly: 3186 },
    facilities: { childcare: 6, youthCenter: 2, elderlyCenter: 0 },
    demand: { children: 88, youth: 85.0, elderly: 55.9 },
    coordinates: [{ x: 145, y: 490 }, { x: 240, y: 490 }, { x: 240, y: 570 }, { x: 145, y: 570 }],
  },
  {
    id: "baekhyeon",
    name: "백현동",
    district: "분당구",
    hot: { x: 49.0, y: 58.59 },
    population: { total: 27500, children: 4400, youth: 3257, elderly: 4162 },
    facilities: { childcare: 5, youthCenter: 2, elderlyCenter: 1 },
    demand: { children: 84, youth: 85.0, elderly: 63.2 },
    coordinates: [{ x: 240, y: 490 }, { x: 335, y: 490 }, { x: 335, y: 570 }, { x: 240, y: 570 }],
  },
  {
    id: "geumgok",
    name: "금곡동",
    district: "분당구",
    hot: { x: 41.4, y: 72.27 },
    population: { total: 25000, children: 3900, youth: 3298, elderly: 5701 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 79, youth: 85.0, elderly: 66.5 },
    coordinates: [{ x: 335, y: 490 }, { x: 430, y: 490 }, { x: 430, y: 570 }, { x: 335, y: 570 }],
  },
  {
    id: "gumi1",
    name: "구미1동",
    district: "분당구",
    hot: { x: 38.61, y: 78.18 },
    population: { total: 21000, children: 3100, youth: 2923, elderly: 2792 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 74, youth: 85.0, elderly: 39.2 },
    coordinates: [{ x: 430, y: 490 }, { x: 530, y: 490 }, { x: 530, y: 560 }, { x: 430, y: 560 }],
  },
  {
    id: "gumi",
    name: "구미동",
    district: "분당구",
    hot: { x: 56.21, y: 85.11 },
    population: { total: 19500, children: 2900, youth: 3457, elderly: 6047 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 72, youth: 85.0, elderly: 81.4 },
    coordinates: [{ x: 50, y: 570 }, { x: 190, y: 570 }, { x: 190, y: 640 }, { x: 50, y: 640 }],
  },
  {
    id: "unjung",
    name: "운중동",
    district: "분당구",
    hot: { x: 23.62, y: 64.91 },
    population: { total: 35000, children: 6000, youth: 3039, elderly: 4488 },
    facilities: { childcare: 7, youthCenter: 3, elderlyCenter: 2 },
    demand: { children: 92, youth: 58.0, elderly: 57.9 },
    coordinates: [{ x: 190, y: 570 }, { x: 530, y: 570 }, { x: 530, y: 640 }, { x: 190, y: 640 }],
  },
];

export const getTotalPopulation = () => {
  return dongs.reduce((sum, d) => sum + d.population.total, 0);
};

export const getTotalChildren = () => {
  return dongs.reduce((sum, d) => sum + d.population.children, 0);
};

export const getTotalYouth = () => {
  return dongs.reduce((sum, d) => sum + d.population.youth, 0);
};

export const getTotalElderly = () => {
  return dongs.reduce((sum, d) => sum + d.population.elderly, 0);
};

export const getRecommendations = (dong: Dong) => {
  const recommendations = [];

  if (dong.demand.elderly > 85 && dong.demand.children < 75) {
    recommendations.push({
      title: "아동 돌봄센터 → 노인 쉼터 전환 제안",
      description: `${dong.name}의 노인 인구 비율이 높고 아동 수요가 낮습니다. 기존 아동 시설 일부를 노인 복지시설로 전환하는 것을 고려하세요.`,
      priority: "high",
    });
  }

  if (dong.demand.children > 80 && dong.demand.elderly < 90) {
    recommendations.push({
      title: "노인 쉼터 → 아동 돌봄센터 전환 제안",
      description: `${dong.name}의 아동 인구가 증가하고 있습니다. 노인 복지시설 일부를 아동 돌봄센터로 전환하여 수요를 충족하세요.`,
      priority: "high",
    });
  }

  if (dong.demand.youth > 75) {
    recommendations.push({
      title: "청년 문화공간 확충 필요",
      description: `${dong.name}의 청년층이 많습니다. 청년 복합문화공간 및 코워킹 스페이스를 추가로 설치하세요.`,
      priority: "medium",
    });
  }

  if (dong.demand.children > 75 && dong.facilities.childcare < 4) {
    recommendations.push({
      title: "어린이집 추가 건립",
      description: `${dong.name}의 아동 돌봄 시설이 부족합니다. 어린이집 2-3개소 추가 설치가 필요합니다.`,
      priority: "high",
    });
  }

  return recommendations;
};

export const getFacilityStatus = (dong: Dong): "excess" | "shortage" | "normal" => {
  const avgDemand = (dong.demand.children + dong.demand.youth + dong.demand.elderly) / 3;

  if (avgDemand > 80) return "shortage";
  if (avgDemand < 70) return "excess";
  return "normal";
};