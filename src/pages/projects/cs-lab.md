---
layout : "~/layouts/project.astro"
name : "CS Lab"
about: "เว็บใช้ในการเรียนการสอนของภาควิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ ซึ่งจะประกอบไปด้วยระบบพิมพ์สัมผัสและระบบ Grader"
stacks : ["nextjs" , "tailwind" , "trpc" , "framer-motion","zod","zustand","prisma","next-auth"]
features : [
  {
    topic : "ระบบจัดการหลังบ้าน",
    body : [
      "จัดการผู้ใช้",
      "จัดการคอร์สเรียน",
      "จัดการนักเรียนในแต่ละ Section",
      "ดูสถานะการทำโจทย์ของแต่ละคนใน Section",
      "ดู Log ต่างๆเกี่ยวกับ Section นั้นๆ",
      "ดูประวัติการแก้ไข Section , Lab , Task",
      "จัดการโจทย์ในระบบ",
      "จัดการภาคเรียน",
      "ดู Authentication Log"
    ]
  },
  {
    topic : "ระบบพิมพ์สัมผัส", 
    body : [
      "ฝึกพิมพ์สัมผัสและสอบพิมพ์สัมผัส",
      "ดูสถานะของโจทย์แต่ละ Lab และสถานะของโจทย์แต่ละข้อใน Lab",
      "ดูประวัติการพิมพ์ แสดงผลในรูปตารางและกราฟเส้น"
    ]
  },
  {
    topic : "ระบบ Grader",
    body : ["Coming Soon..."]
  }
]
preview: https://lab.cs.sci.ku.ac.th
published_date : "2023-12-18T00:54:00"
---