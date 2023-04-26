const words_relation=[
  //Ông muốn thêm từ vụng thì cứ tạo đối tượng mới nha
    {
      picture:require('../assets/book.png'),//ông thay ảnh ở đây nhen
      english:'Love',
      vietsub:'Tình yêu'
    },
    {
     picture:require('../assets/book.png'),
      english:'Romance',
      vietsub:'Lãng mạn'
    },
    {
     picture:require('../assets/book.png'),
      english:'Trust',
      vietsub:'Niềm tin'
    },
    {
     picture:require('../assets/book.png'),
      english:'Support',
      vietsub:'Ủng hộ'
    },
    {
     picture:require('../assets/book.png'),
      english:'Connection',
      vietsub:'Mối liên kết'
    },
    {
     picture:require('../assets/book.png'),
      english:'Partnership',
      vietsub:'Đối tác'
    },
    {
     picture:require('../assets/book.png'),
      english:'Teamwork',
      vietsub:'Làm việc nhóm'
    },
    {
     picture:require('../assets/book.png'),
      english:'Forgiveness',
      vietsub:'Sự tha thứ'
    },
    {
     picture:require('../assets/book.png'),
      english:'Communication',
      vietsub:'Sự giao tiếp'
    },
    {
     picture:require('../assets/book.png'),
      english:'Respect',
      vietsub:'Tôn trọng'
    },
]
const words_time=[
    {
      picture:require('../assets/book.png'),//ông thay ảnh ở đây nhen
      english:'Time',
      vietsub:'Thời gian'
    },
    {
     picture:require('../assets/book.png'),
      english:'Hour',
      vietsub:'Giờ'
    },
    {
     picture:require('../assets/book.png'),
      english:'Minute',
      vietsub:'Phút'
    },
    {
     picture:require('../assets/book.png'),
      english:'Second',
      vietsub:'Giây'
    },
    {
     picture:require('../assets/book.png'),
      english:'Calendar',
      vietsub:'Lịch'
    },
    {
     picture:require('../assets/book.png'),
      english:'Year',
      vietsub:'Năm'
    },
    {
     picture:require('../assets/book.png'),
      english:'Era',
      vietsub:'Thời đại'
    },
    {
     picture:require('../assets/book.png'),
      english:'Deadline',
      vietsub:'Hạn chót'
    },
    {
     picture:require('../assets/book.png'),
      english:'Schedule',
      vietsub:'Lịch trình'
    },
    {
     picture:require('../assets/book.png'),
      english:'On time',
      vietsub:'Đúng giờ'
    },
]
const words_weather=[
  {
    picture:require('../assets/book.png'),//ông thay ảnh ở đây nhen
    english:'Weather',
    vietsub:'Thời tiết'
  },
  {
   picture:require('../assets/book.png'),
    english:'Wind',
    vietsub:'Gió'
  },
  {
   picture:require('../assets/book.png'),
    english:'Rain',
    vietsub:'Mưa'
  },
  {
   picture:require('../assets/book.png'),
    english:'Snow',
    vietsub:'Tuyết'
  },
  {
   picture:require('../assets/book.png'),
    english:'Hail',
    vietsub:'Mưa đá'
  },
  {
   picture:require('../assets/book.png'),
    english:'Thunder',
    vietsub:'Sấm sét'
  },
  {
   picture:require('../assets/book.png'),
    english:'Lightning',
    vietsub:'Tia chớp'
  },
  {
   picture:require('../assets/book.png'),
    english:'Fog',
    vietsub:'Sương mù'
  },
  {
   picture:require('../assets/book.png'),
    english:'Tornado',
    vietsub:'Lốc xoáy'
  },
  {
   picture:require('../assets/book.png'),
    english:'Sunny',
    vietsub:'Nắng'
  },
]
const words_animal=[
  {
    picture:require('../assets/book.png'),//ông thay ảnh ở đây nhen
    english:'Animal',
    vietsub:'Động vật'
  },
  {
   picture:require('../assets/book.png'),
    english:'Bird',
    vietsub:'Chim'
  },
  {
   picture:require('../assets/book.png'),
    english:'Fish',
    vietsub:'Cá'
  },
  {
   picture:require('../assets/book.png'),
    english:'Wild',
    vietsub:'Hoang dã'
  },
  {
   picture:require('../assets/book.png'),
    english:'Insect',
    vietsub:'Côn trùng'
  },
  {
   picture:require('../assets/book.png'),
    english:'Plant',
    vietsub:'Thực vật'
  },
  {
   picture:require('../assets/book.png'),
    english:'Flower',
    vietsub:'Hoa'
  },
  {
   picture:require('../assets/book.png'),
    english:'Tree',
    vietsub:'Cây'
  },
  {
   picture:require('../assets/book.png'),
    english:'Fruit',
    vietsub:'Trái cây'
  },
  {
   picture:require('../assets/book.png'),
    english:'Vegetable',
    vietsub:'Rau quả'
  },
]
const words_food=[
  {
    picture:require('../assets/book.png'),//ông thay ảnh ở đây nhen
    english:'Food',
    vietsub:'Đồ ăn'
  },
  {
   picture:require('../assets/book.png'),
    english:'Meal',
    vietsub:'Bữa ăn'
  },
  {
   picture:require('../assets/book.png'),
    english:'Dish',
    vietsub:'Món ăn'
  },
  {
   picture:require('../assets/book.png'),
    english:'Cuisine',
    vietsub:'Ẩm thực'
  },
  {
   picture:require('../assets/book.png'),
    english:'Sweet:',
    vietsub:'Ngọt'
  },
  {
   picture:require('../assets/book.png'),
    english:'Sour',
    vietsub:'Chua'
  },
  {
   picture:require('../assets/book.png'),
    english:'Salty',
    vietsub:'Mặn'
  },
  {
   picture:require('../assets/book.png'),
    english:'Spicy',
    vietsub:'Cay'
  },
  {
   picture:require('../assets/book.png'),
    english:'Bitter',
    vietsub:'Đắng'
  },
  {
   picture:require('../assets/book.png'),
    english:'Vegetarian',
    vietsub:'Ăn chay'
  },
]
const words_sport=[
  {
    picture:require('../assets/book.png'),//ông thay ảnh ở đây nhen
    english:'Sport',
    vietsub:'Thể thao'
  },
  {
   picture:require('../assets/book.png'),
    english:'Cycling',
    vietsub:'Môn đạp xe'
  },
  {
   picture:require('../assets/book.png'),
    english:'Tennis',
    vietsub:'Môn quần vợt'
  },
  {
   picture:require('../assets/book.png'),
    english:'Running',
    vietsub:'Môn chạy bộ'
  },
  {
   picture:require('../assets/book.png'),
    english:'Swimming',
    vietsub:'Môn bơi lội'
  },
  {
   picture:require('../assets/book.png'),
    english:'Riding',
    vietsub:'Môn cưỡi ngựa'
  },
  {
   picture:require('../assets/book.png'),
    english:'Volleyball',
    vietsub:'Môn bóng chuyền'
  },
  {
   picture:require('../assets/book.png'),
    english:'Football',
    vietsub:'Môn bóng đá'
  },
  {
   picture:require('../assets/book.png'),
    english:'Basketball',
    vietsub:'Môn bóng rổ'
  },
  {
   picture:require('../assets/book.png'),
    english:'Baseball',
    vietsub:'Môn bóng chày'
  },
]
const words_education=[
  {
    picture:require('../assets/book.png'),//ông thay ảnh ở đây nhen
    english:'Education',
    vietsub:'Giáo dục'
  },
  {
   picture:require('../assets/book.png'),
    english:'Homework',
    vietsub:'Bài tập về nhà'
  },
  {
   picture:require('../assets/book.png'),
    english:'Teacher',
    vietsub:'Giáo viên'
  },
  {
   picture:require('../assets/book.png'),
    english:'Lesson',
    vietsub:'Bài học'
  },
  {
   picture:require('../assets/book.png'),
    english:'Subject',
    vietsub:'Môn học'
  },
  {
   picture:require('../assets/book.png'),
    english:'Mark',
    vietsub:'Chấm thi'
  },
  {
   picture:require('../assets/book.png'),
    english:'President',
    vietsub:'Hiệu trưởng'
  },
  {
   picture:require('../assets/book.png'),
    english:'Test',
    vietsub:'Kiểm tra'
  },
  {
   picture:require('../assets/book.png'),
    english:'Break',
    vietsub:'Giải lao'
  },
  {
   picture:require('../assets/book.png'),
    english:'University',
    vietsub:'Đại học'
  },
]
const words_travel=[
  {
    picture:require('../assets/book.png'),//ông thay ảnh ở đây nhen
    english:'Inbound travel',
    vietsub:'Du lịch trong nước'
  },
  {
   picture:require('../assets/book.png'),
    english:'Backpacking',
    vietsub:'Du lịch bụi'
  },
  {
   picture:require('../assets/book.png'),
    english:'Hiking',
    vietsub:'Du lịch sinh thái'
  },
  {
   picture:require('../assets/book.png'),
    english:'Outbound travel',
    vietsub:'Du lịch sinh thái'
  },
  {
   picture:require('../assets/book.png'),
    english:'Leisure travel',
    vietsub:'Du lịch nghỉ dưỡng'
  },
  {
   picture:require('../assets/book.png'),
    english:'Culture',
    vietsub:'Văn hóa'
  },
  {
   picture:require('../assets/book.png'),
    english:'Value',
    vietsub:'Giá trị'
  },
  {
   picture:require('../assets/book.png'),
    english:'Belief',
    vietsub:'Đức tin'
  },
  {
   picture:require('../assets/book.png'),
    english:'Minority group',
    vietsub:'Dân tộc thiểu số'
  },
  {
   picture:require('../assets/book.png'),
    english:'Majority group',
    vietsub:'Dân tộc đa số'
  },
]
export {
  words_relation,
  words_time,
  words_weather,
  words_animal,
  words_food,
  words_sport,
  words_education,
  words_travel
};