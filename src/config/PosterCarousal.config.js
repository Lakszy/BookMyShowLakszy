const settings ={
        slidesToShow:5,
        infinite:false,
        autoPlay: false,
        IntialSilde:0,
        // fade: true,
        speed:500,
        slidesToScroll:4,
        responsive: [
        {
            breakpoint:1024,
            settings:{
                slidesToScroll:3,
                slidesToShow:3,
            }
        },

        {
            breakpoint:600,
            settings:{
                slidesToScroll:2,
                slidesToShow:2,
            }
        },

        {
            breakpoint:300,
            settings:{
                slidesToScroll:1,
                slidesToShow:1,
            }
        },
    ]
};
        export default settings;