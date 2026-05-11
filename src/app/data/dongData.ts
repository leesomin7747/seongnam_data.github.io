export interface Dong {
  id: string;
  name: string;
  district: "수정구" | "중원구" | "분당구";
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
    population: { total: 18000, children: 2400, youth: 8200, elderly: 3600 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 70, youth: 65, elderly: 80 },
    coordinates: [{ x: 50, y: 50 }, { x: 120, y: 50 }, { x: 120, y: 110 }, { x: 50, y: 110 }],
  },
  {
    id: "sinheung2",
    name: "신흥2동",
    district: "수정구",
    population: { total: 16000, children: 2200, youth: 7400, elderly: 3200 },
    facilities: { childcare: 2, youthCenter: 0, elderlyCenter: 1 },
    demand: { children: 75, youth: 60, elderly: 85 },
    coordinates: [{ x: 120, y: 50 }, { x: 190, y: 50 }, { x: 190, y: 110 }, { x: 120, y: 110 }],
  },
  {
    id: "sinheung3",
    name: "신흥3동",
    district: "수정구",
    population: { total: 14500, children: 2000, youth: 6800, elderly: 2900 },
    facilities: { childcare: 1, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 72, youth: 58, elderly: 78 },
    coordinates: [{ x: 190, y: 50 }, { x: 260, y: 50 }, { x: 260, y: 110 }, { x: 190, y: 110 }],
  },
  {
    id: "taepyeong1",
    name: "태평1동",
    district: "수정구",
    population: { total: 19000, children: 2600, youth: 8800, elderly: 3800 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 68, youth: 62, elderly: 82 },
    coordinates: [{ x: 50, y: 110 }, { x: 120, y: 110 }, { x: 120, y: 170 }, { x: 50, y: 170 }],
  },
  {
    id: "taepyeong2",
    name: "태평2동",
    district: "수정구",
    population: { total: 17500, children: 2400, youth: 8100, elderly: 3500 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 71, youth: 64, elderly: 84 },
    coordinates: [{ x: 120, y: 110 }, { x: 190, y: 110 }, { x: 190, y: 170 }, { x: 120, y: 170 }],
  },
  {
    id: "taepyeong3",
    name: "태평3동",
    district: "수정구",
    population: { total: 15800, children: 2200, youth: 7400, elderly: 3100 },
    facilities: { childcare: 2, youthCenter: 0, elderlyCenter: 1 },
    demand: { children: 74, youth: 61, elderly: 86 },
    coordinates: [{ x: 190, y: 110 }, { x: 260, y: 110 }, { x: 260, y: 170 }, { x: 190, y: 170 }],
  },
  {
    id: "taepyeong4",
    name: "태평4동",
    district: "수정구",
    population: { total: 16200, children: 2300, youth: 7600, elderly: 3200 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 73, youth: 63, elderly: 83 },
    coordinates: [{ x: 50, y: 170 }, { x: 120, y: 170 }, { x: 120, y: 230 }, { x: 50, y: 230 }],
  },
  {
    id: "sujin1",
    name: "수진1동",
    district: "수정구",
    population: { total: 20000, children: 2800, youth: 9200, elderly: 4000 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 67, youth: 60, elderly: 81 },
    coordinates: [{ x: 120, y: 170 }, { x: 190, y: 170 }, { x: 190, y: 230 }, { x: 120, y: 230 }],
  },
  {
    id: "sujin2",
    name: "수진2동",
    district: "수정구",
    population: { total: 18500, children: 2600, youth: 8600, elderly: 3700 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 69, youth: 62, elderly: 83 },
    coordinates: [{ x: 190, y: 170 }, { x: 260, y: 170 }, { x: 260, y: 230 }, { x: 190, y: 230 }],
  },
  {
    id: "dandae",
    name: "단대동",
    district: "수정구",
    population: { total: 17000, children: 2400, youth: 7900, elderly: 3400 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 72, youth: 64, elderly: 85 },
    coordinates: [{ x: 50, y: 230 }, { x: 155, y: 230 }, { x: 155, y: 280 }, { x: 50, y: 280 }],
  },
  {
    id: "sanseong",
    name: "산성동",
    district: "수정구",
    population: { total: 19500, children: 2700, youth: 9000, elderly: 3900 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 68, youth: 61, elderly: 82 },
    coordinates: [{ x: 155, y: 230 }, { x: 260, y: 230 }, { x: 260, y: 280 }, { x: 155, y: 280 }],
  },

  // 중원구
  {
    id: "yangji",
    name: "양지동",
    district: "중원구",
    population: { total: 21000, children: 3000, youth: 9800, elderly: 4200 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 66, youth: 70, elderly: 80 },
    coordinates: [{ x: 260, y: 50 }, { x: 330, y: 50 }, { x: 330, y: 110 }, { x: 260, y: 110 }],
  },
  {
    id: "bokjeong",
    name: "복정동",
    district: "중원구",
    population: { total: 24000, children: 3500, youth: 11200, elderly: 4800 },
    facilities: { childcare: 4, youthCenter: 2, elderlyCenter: 2 },
    demand: { children: 70, youth: 75, elderly: 78 },
    coordinates: [{ x: 330, y: 50 }, { x: 400, y: 50 }, { x: 400, y: 110 }, { x: 330, y: 110 }],
  },
  {
    id: "wirye",
    name: "위례동",
    district: "중원구",
    population: { total: 32000, children: 5200, youth: 15800, elderly: 5100 },
    facilities: { childcare: 6, youthCenter: 2, elderlyCenter: 2 },
    demand: { children: 82, youth: 85, elderly: 72 },
    coordinates: [{ x: 400, y: 50 }, { x: 490, y: 50 }, { x: 490, y: 140 }, { x: 400, y: 140 }],
  },
  {
    id: "sinchon",
    name: "신촌동",
    district: "중원구",
    population: { total: 16500, children: 2300, youth: 7700, elderly: 3300 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 68, youth: 65, elderly: 81 },
    coordinates: [{ x: 260, y: 110 }, { x: 330, y: 110 }, { x: 330, y: 170 }, { x: 260, y: 170 }],
  },
  {
    id: "godeung",
    name: "고등동",
    district: "중원구",
    population: { total: 18000, children: 2600, youth: 8400, elderly: 3600 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 70, youth: 68, elderly: 82 },
    coordinates: [{ x: 330, y: 110 }, { x: 400, y: 110 }, { x: 400, y: 170 }, { x: 330, y: 170 }],
  },
  {
    id: "siheung",
    name: "시흥동",
    district: "중원구",
    population: { total: 19200, children: 2700, youth: 8900, elderly: 3800 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 69, youth: 67, elderly: 83 },
    coordinates: [{ x: 400, y: 140 }, { x: 490, y: 140 }, { x: 490, y: 210 }, { x: 400, y: 210 }],
  },
  {
    id: "seongnam",
    name: "성남동",
    district: "중원구",
    population: { total: 17800, children: 2500, youth: 8300, elderly: 3500 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 71, youth: 66, elderly: 84 },
    coordinates: [{ x: 260, y: 170 }, { x: 330, y: 170 }, { x: 330, y: 230 }, { x: 260, y: 230 }],
  },
  {
    id: "jungang",
    name: "중앙동",
    district: "중원구",
    population: { total: 20500, children: 2900, youth: 9500, elderly: 4100 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 67, youth: 69, elderly: 81 },
    coordinates: [{ x: 330, y: 170 }, { x: 400, y: 170 }, { x: 400, y: 230 }, { x: 330, y: 230 }],
  },
  {
    id: "geumgwang1",
    name: "금광1동",
    district: "중원구",
    population: { total: 18800, children: 2700, youth: 8700, elderly: 3700 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 70, youth: 68, elderly: 82 },
    coordinates: [{ x: 400, y: 210 }, { x: 490, y: 210 }, { x: 490, y: 270 }, { x: 400, y: 270 }],
  },
  {
    id: "geumgwang2",
    name: "금광2동",
    district: "중원구",
    population: { total: 17500, children: 2500, youth: 8100, elderly: 3500 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 72, youth: 67, elderly: 84 },
    coordinates: [{ x: 260, y: 230 }, { x: 330, y: 230 }, { x: 330, y: 280 }, { x: 260, y: 280 }],
  },
  {
    id: "eunhaeng1",
    name: "은행1동",
    district: "중원구",
    population: { total: 19800, children: 2800, youth: 9200, elderly: 3900 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 68, youth: 69, elderly: 81 },
    coordinates: [{ x: 330, y: 230 }, { x: 400, y: 230 }, { x: 400, y: 280 }, { x: 330, y: 280 }],
  },
  {
    id: "eunhaeng2",
    name: "은행2동",
    district: "중원구",
    population: { total: 18200, children: 2600, youth: 8500, elderly: 3600 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 71, youth: 68, elderly: 83 },
    coordinates: [{ x: 400, y: 270 }, { x: 490, y: 270 }, { x: 490, y: 320 }, { x: 400, y: 320 }],
  },
  {
    id: "sangdaewon1",
    name: "상대원1동",
    district: "중원구",
    population: { total: 21500, children: 3100, youth: 10000, elderly: 4300 },
    facilities: { childcare: 3, youthCenter: 2, elderlyCenter: 2 },
    demand: { children: 66, youth: 71, elderly: 80 },
    coordinates: [{ x: 260, y: 280 }, { x: 330, y: 280 }, { x: 330, y: 340 }, { x: 260, y: 340 }],
  },
  {
    id: "sangdaewon2",
    name: "상대원2동",
    district: "중원구",
    population: { total: 19500, children: 2800, youth: 9100, elderly: 3900 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 69, youth: 70, elderly: 82 },
    coordinates: [{ x: 330, y: 280 }, { x: 400, y: 280 }, { x: 400, y: 340 }, { x: 330, y: 340 }],
  },
  {
    id: "sangdaewon3",
    name: "상대원3동",
    district: "중원구",
    population: { total: 18500, children: 2700, youth: 8600, elderly: 3700 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 70, youth: 69, elderly: 83 },
    coordinates: [{ x: 400, y: 320 }, { x: 490, y: 320 }, { x: 490, y: 380 }, { x: 400, y: 380 }],
  },
  {
    id: "hadaewon",
    name: "하대원동",
    district: "중원구",
    population: { total: 20000, children: 2900, youth: 9300, elderly: 4000 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 68, youth: 70, elderly: 81 },
    coordinates: [{ x: 260, y: 340 }, { x: 355, y: 340 }, { x: 355, y: 400 }, { x: 260, y: 400 }],
  },
  {
    id: "dochon",
    name: "도촌동",
    district: "중원구",
    population: { total: 17800, children: 2600, youth: 8300, elderly: 3500 },
    facilities: { childcare: 2, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 71, youth: 68, elderly: 84 },
    coordinates: [{ x: 355, y: 340 }, { x: 490, y: 340 }, { x: 490, y: 400 }, { x: 355, y: 400 }],
  },

  // 분당구
  {
    id: "bundang",
    name: "분당동",
    district: "분당구",
    population: { total: 22000, children: 3200, youth: 10300, elderly: 4400 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 75, youth: 72, elderly: 88 },
    coordinates: [{ x: 50, y: 280 }, { x: 130, y: 280 }, { x: 130, y: 350 }, { x: 50, y: 350 }],
  },
  {
    id: "sunae1",
    name: "수내1동",
    district: "분당구",
    population: { total: 25000, children: 3800, youth: 11700, elderly: 5000 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 78, youth: 74, elderly: 90 },
    coordinates: [{ x: 130, y: 280 }, { x: 210, y: 280 }, { x: 210, y: 350 }, { x: 130, y: 350 }],
  },
  {
    id: "sunae2",
    name: "수내2동",
    district: "분당구",
    population: { total: 23500, children: 3500, youth: 11000, elderly: 4700 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 76, youth: 73, elderly: 89 },
    coordinates: [{ x: 210, y: 280 }, { x: 260, y: 280 }, { x: 260, y: 350 }, { x: 210, y: 350 }],
  },
  {
    id: "sunae3",
    name: "수내3동",
    district: "분당구",
    population: { total: 24000, children: 3600, youth: 11200, elderly: 4800 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 77, youth: 73, elderly: 90 },
    coordinates: [{ x: 50, y: 350 }, { x: 130, y: 350 }, { x: 130, y: 420 }, { x: 50, y: 420 }],
  },
  {
    id: "jeongja",
    name: "정자동",
    district: "분당구",
    population: { total: 26000, children: 4000, youth: 12200, elderly: 5200 },
    facilities: { childcare: 4, youthCenter: 2, elderlyCenter: 2 },
    demand: { children: 80, youth: 75, elderly: 92 },
    coordinates: [{ x: 130, y: 350 }, { x: 210, y: 350 }, { x: 210, y: 420 }, { x: 130, y: 420 }],
  },
  {
    id: "jeongja1",
    name: "정자1동",
    district: "분당구",
    population: { total: 24500, children: 3700, youth: 11500, elderly: 4900 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 78, youth: 74, elderly: 91 },
    coordinates: [{ x: 210, y: 350 }, { x: 260, y: 350 }, { x: 260, y: 420 }, { x: 210, y: 420 }],
  },
  {
    id: "jeongja2",
    name: "정자2동",
    district: "분당구",
    population: { total: 23000, children: 3400, youth: 10800, elderly: 4600 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 76, youth: 72, elderly: 89 },
    coordinates: [{ x: 50, y: 420 }, { x: 130, y: 420 }, { x: 130, y: 490 }, { x: 50, y: 490 }],
  },
  {
    id: "jeongja3",
    name: "정자3동",
    district: "분당구",
    population: { total: 22500, children: 3300, youth: 10500, elderly: 4500 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 75, youth: 71, elderly: 88 },
    coordinates: [{ x: 130, y: 420 }, { x: 210, y: 420 }, { x: 210, y: 490 }, { x: 130, y: 490 }],
  },
  {
    id: "seohyeon1",
    name: "서현1동",
    district: "분당구",
    population: { total: 27000, children: 4200, youth: 12700, elderly: 5400 },
    facilities: { childcare: 5, youthCenter: 2, elderlyCenter: 2 },
    demand: { children: 82, youth: 76, elderly: 93 },
    coordinates: [{ x: 210, y: 420 }, { x: 290, y: 420 }, { x: 290, y: 490 }, { x: 210, y: 490 }],
  },
  {
    id: "seohyeon2",
    name: "서현2동",
    district: "분당구",
    population: { total: 25500, children: 3900, youth: 11900, elderly: 5100 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 79, youth: 75, elderly: 91 },
    coordinates: [{ x: 290, y: 420 }, { x: 370, y: 420 }, { x: 370, y: 490 }, { x: 290, y: 490 }],
  },
  {
    id: "imae1",
    name: "이매1동",
    district: "분당구",
    population: { total: 23800, children: 3600, youth: 11100, elderly: 4800 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 77, youth: 73, elderly: 90 },
    coordinates: [{ x: 370, y: 400 }, { x: 450, y: 400 }, { x: 450, y: 460 }, { x: 370, y: 460 }],
  },
  {
    id: "imae2",
    name: "이매2동",
    district: "분당구",
    population: { total: 22000, children: 3300, youth: 10300, elderly: 4400 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 75, youth: 71, elderly: 88 },
    coordinates: [{ x: 450, y: 400 }, { x: 530, y: 400 }, { x: 530, y: 460 }, { x: 450, y: 460 }],
  },
  {
    id: "yatap1",
    name: "야탑1동",
    district: "분당구",
    population: { total: 26500, children: 4100, youth: 12400, elderly: 5300 },
    facilities: { childcare: 5, youthCenter: 2, elderlyCenter: 2 },
    demand: { children: 81, youth: 75, elderly: 92 },
    coordinates: [{ x: 370, y: 460 }, { x: 450, y: 460 }, { x: 450, y: 530 }, { x: 370, y: 530 }],
  },
  {
    id: "yatap2",
    name: "야탑2동",
    district: "분당구",
    population: { total: 24800, children: 3800, youth: 11600, elderly: 4900 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 78, youth: 74, elderly: 90 },
    coordinates: [{ x: 450, y: 460 }, { x: 530, y: 460 }, { x: 530, y: 530 }, { x: 450, y: 530 }],
  },
  {
    id: "yatap3",
    name: "야탑3동",
    district: "분당구",
    population: { total: 23200, children: 3500, youth: 10900, elderly: 4600 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 76, youth: 72, elderly: 89 },
    coordinates: [{ x: 290, y: 490 }, { x: 370, y: 490 }, { x: 370, y: 550 }, { x: 290, y: 550 }],
  },
  {
    id: "pangyo",
    name: "판교동",
    district: "분당구",
    population: { total: 28000, children: 4500, youth: 13200, elderly: 5600 },
    facilities: { childcare: 5, youthCenter: 2, elderlyCenter: 2 },
    demand: { children: 85, youth: 78, elderly: 94 },
    coordinates: [{ x: 50, y: 490 }, { x: 145, y: 490 }, { x: 145, y: 570 }, { x: 50, y: 570 }],
  },
  {
    id: "sampyeong",
    name: "삼평동",
    district: "분당구",
    population: { total: 30000, children: 5000, youth: 14500, elderly: 6000 },
    facilities: { childcare: 6, youthCenter: 2, elderlyCenter: 2 },
    demand: { children: 88, youth: 82, elderly: 96 },
    coordinates: [{ x: 145, y: 490 }, { x: 240, y: 490 }, { x: 240, y: 570 }, { x: 145, y: 570 }],
  },
  {
    id: "baekhyeon",
    name: "백현동",
    district: "분당구",
    population: { total: 27500, children: 4400, youth: 12900, elderly: 5500 },
    facilities: { childcare: 5, youthCenter: 2, elderlyCenter: 2 },
    demand: { children: 84, youth: 77, elderly: 93 },
    coordinates: [{ x: 240, y: 490 }, { x: 335, y: 490 }, { x: 335, y: 570 }, { x: 240, y: 570 }],
  },
  {
    id: "geumgok",
    name: "금곡동",
    district: "분당구",
    population: { total: 25000, children: 3900, youth: 11700, elderly: 5000 },
    facilities: { childcare: 4, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 79, youth: 74, elderly: 91 },
    coordinates: [{ x: 335, y: 490 }, { x: 430, y: 490 }, { x: 430, y: 570 }, { x: 335, y: 570 }],
  },
  {
    id: "gumi1",
    name: "구미1동",
    district: "분당구",
    population: { total: 21000, children: 3100, youth: 9800, elderly: 4200 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 2 },
    demand: { children: 74, youth: 70, elderly: 87 },
    coordinates: [{ x: 430, y: 490 }, { x: 530, y: 490 }, { x: 530, y: 560 }, { x: 430, y: 560 }],
  },
  {
    id: "gumi",
    name: "구미동",
    district: "분당구",
    population: { total: 19500, children: 2900, youth: 9100, elderly: 3900 },
    facilities: { childcare: 3, youthCenter: 1, elderlyCenter: 1 },
    demand: { children: 72, youth: 68, elderly: 86 },
    coordinates: [{ x: 50, y: 570 }, { x: 190, y: 570 }, { x: 190, y: 640 }, { x: 50, y: 640 }],
  },
  {
    id: "unjung",
    name: "운중동",
    district: "분당구",
    population: { total: 35000, children: 6000, youth: 17000, elderly: 7000 },
    facilities: { childcare: 7, youthCenter: 3, elderlyCenter: 3 },
    demand: { children: 92, youth: 88, elderly: 98 },
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
