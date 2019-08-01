const media = [
    {
        title: 'Hip on Pop',
        description: "A delightful children's book.",
        type: 'book',
        contributor:'Dr. Fisayo',
        showDetails: false,
    },
    {
        title: 'The joy of Painting',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        type: 'DVD',
        contributor:'',
        showDetails: false,
    },
    {
        title: 'The enemy called Average',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        type: 'book',
        contributor:'Bob Ross',
        showDetails: false,
    },
    {
        title: 'Showdown in little Tokyo',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        type: 'DVD',
        contributor:'Brian Whitney',
        showDetails: false,
    },
    {
        title: 'The beginning of Human',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        type: 'book',
        contributor:'Alfonso Derela',
        showDetails: false,
    },
    {
        title: 'Animal Kingdom',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        type: 'DVD',
        contributor:'Priye Johnson',
        showDetails: false,
    },
    {
        title: 'How to be rich and wealthy',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        type: 'book',
        contributor:'Micheal Jackson',
        showDetails: false,
    },
    {
        title: 'The journey of Isrealites',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        type: 'book',
        contributor:'Dr. Glenlivet',
        showDetails: false,
    },
    {
        title: 'Thirty days in wilderness',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        type: 'DVD',
        contributor:'Prof. James',
        showDetails: false,
    },
    {
        title: 'Shaolin Temple',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        type: 'DVD',
        contributor:'Lionel Messi',
        showDetails: false,
    }
];

const app = new Vue({
    el: '#media-list',
    data: {
        title: 'Jospo Media Library',
        mediaList: media,
        type: ''
    },
    methods: {
        toggleDetails: function(media) {
            media.showDetails = !media.showDetails
        },
        filterList: function(event) {
            this.type = event.target.value;
        }
    },
    computed: {
        uniqueItemsList: function() {
            const types = [];
            this.mediaList.map((item) => {
                if (!types.includes(item.type)) {
                    types.push(item.type);
                }
            });
            return types;
        }
    }
});
