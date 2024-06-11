//베라 퀴즈
// type IcecreamName = '슈팅스타' | '피스타치오 아몬드' | '엄마는 외계인'
// type Ingredient = '블루베리' | '바닐라' | '시럽' | '피스타치오' | '아몬드' | '초콜렛' | '화이트무스'
// type Allegic = '우유' | '대두' | '밀'
// type NutritionInformation = '1회 제공량' | '열량' | '당류' | '단백질' | '포화지방' | '나트륨'

// type Icecream = {
//     icecreamName: IcecreamName,
//     ingredient: Ingredient[],
//     allegic: Allegic[],
//     nutritionInformation: NutritionInformation[]
// }

// const baskinrobbins: Icecream[] = [{icecreamName:'슈팅스타', ingredient:["바닐라"]}]

type Category = 'icecream' | 'cake' | 'cookie';
type Icon = { photourl: string; name: string };
type Allergies = '우유' | '대두' | '계란' | '땅콩' | '밀' | '복숭아';
type PhotoURL = { url: string };

type IcecreamProductInfo = {
  category: Category;
  engName: string;
  korName: string;
  description: string;
  // mainIngredient: Icon[];
};

type NutritionInfo = {
  Servings: number;
  kcal: number;
  sugars: number;
  proteins: number;
  salts: number;
  allergies: Allergies[];
};
// 결합
type Icecream = IcecreamProductInfo & NutritionInfo & PhotoURL;

const makeIcecreamJumboTron = (data: Icecream) => {
  `<div>${data.url}</div>`;
};

// 포함
type IcecreamComposition = {
  icecreamProductInfo: IcecreamProductInfo;
  nutritionInfo: NutritionInfo;
  photoURL: PhotoURL;
};


// 포함으로 만들어본것
const baskin1 : IcecreamComposition = {
  icecreamProductInfo : {
    category: 'cake',
    engName: 'string',
    korName: 'string',
    description: 'string',
    // mainIngredient: {}
  },
  nutritionInfo : {
    Servings: 1,
    kcal: 2,
    sugars: 3,
    proteins: 1,
    salts: 2,
    allergies: ['계란','대두'],
  },
  photoURL : {url:"asdasd"}

}
