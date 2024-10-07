const imgData = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLzMewm9M3ac5D7CwpyDkmTiVzt-m282t1A&s",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIoJIT7eMed8DUEFsr_iqG5qZZyR0ngbODEA&s",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mmPd9A6SyKPqPrp7Wf9U-teC2haevZfeaQ&s",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt54f-L5YOLxszd2zpM8i2WjGh-7dCmLKylQ&s",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVgpLcwItIKCyICrRpCy-ggru2RxePmQ0mQ&s",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKd29tynmX5OdoYlgGdH_qlxJIogwOYGR-BQ&s",
  },
];

function CardGallery() {
  return imgData.map((object, i) => {
    return <img key={i} src={object.src} />;
  });
}

export default CardGallery;
