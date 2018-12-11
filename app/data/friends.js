var peopleData= [
    {
        "name": "Jacob",
        "photo": "https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg",
        "scores": [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"

        ]
    },
    {
        "name": "Mike",
        "photo": "http://s1.1zoom.net/big0/222/387252-svetik.jpg",
        "scores": [
            "3",
            "2",
            "5",
            "2",
            "4",
            "5",
            "3",
            "5",
            "4",
            "2"
        ]
    },
    {
        "name": "Bill",
        "photo": "https://simplymassagefl.com/wp-content/uploads/2018/04/Bunny.jpg",
        "scores": [
            "2",
            "3",
            "5",
            "1",
            "3",
            "4",
            "1",
            "4",
            "2",
            "3"
        ]
    },
    {
        "name": "Ahmed",
        "photo": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681",
        "scores": [
            "1",
            "4",
            "4",
            "2",
            "3",
            "2",
            "1",
            "5",
            "2",
            "4"          
        ]
    },
    {
        "name": "Keanu",
        "photo": "data:image/jpeg;base64,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",
        "scores": [
            "5",
            "5",
            "5",
            "5",
            "2",
            "3",
            "4",
            "5",
            "5",
            "2"           
        ]
    },
    {
        "name": "Jordan",
        "photo": "https://demo.phpgang.com/crop-images/demo_files/pool.jpg",
        "scores": [
            "5",
            "5",
            "2",
            "1",
            "4",
            "1",
            "3",
            "3",
            "4",
            "3"            
        ]
    },
    {
        "name": "Shia",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfYOpIsjIBpkAAR1HHsOx7gXn4tTNHca_c3N-qE-iePxJ-5pE",
        "scores": [
            "2",
            "3",
            "4",
            "3",
            "5",
            "2",
            "4",
            "2",
            "4",
            "3"            
        ]
    }
];


module.exports = {
    peopleData: peopleData,
};