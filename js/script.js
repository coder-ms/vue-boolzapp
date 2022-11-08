const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            myMessage: '',
            currentChat: 0,
            searchTerm: '',
            searchPerson: '',

            contacts: [
                {
                    name: 'Michele',
                    id: 1,
                    image: './img/avatar_1.jpg',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            id: 3,
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    id: 2,
                    image: './img/avatar_2.jpg',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            id: 3,
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },

                { // CHAT SAMUELE 
                    name: 'Samuele',
                    id: 3,
                    image: './img/avatar_3.jpg',

                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            id: 2,
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            id: 3,
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessio',
                    id: 4,
                    image: './img/avatar_4.jpg',

                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Gioele',
                    id: 5,
                    avatar: '_5',
                    image: './img/avatar_5.jpg',

                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    id: 6,
                    avatar: '_6',
                    image: './img/avatar_6.jpg',

                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            id: 3,
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    id: 7,
                    avatar: '_7',
                    image: './img/avatar_7.jpg',

                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    id: 8,
                    avatar: '_8',
                    image: './img/avatar_8.jpg',

                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            id: 3,
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            newMessage: {
                id: '',
                date: '',
                message: '',
                status: ''
            },
        }
    },


    computed: {
        filterContactsx(){
            let newArray = this.contacts.filter((item) => {
                const name = item.name.toLowerCase();
                console.log(name);
                console.log(this.contacts);
                return name.includes(this.searchTerm.toLowerCase());
            })
            return newArray;
        },
        filterContacts(){
            const filteredList = this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.searchPerson.toLowerCase());
            })
            return filteredList;
        },
    },

    methods: {
        setChat(id) {
            this.currentChat = this.contacts.findIndex((item) => item.id === id)
        },

        getChat(id) {
            this.currentChat = this.contact.findIndex((item) => {
                return item.id === id;
            })
            console.log(id);
        },

        sendMessage() {
            if( ! this.newMessage.message.length ) return;
            const d = new Date();
            let newDate = d.toDateString();
            const newSentMessagy = {
                date: newDate,
                message: this.newMessage.message,
                status: 'sent'
            }
            this.contacts[this.currentChat].messages.push(newSentMessagy);
            this.newMessage.message = '';

            setTimeout(() => {
                const d = new Date();
                let newDate = d.toDateString();
                const newSentMessagx = {
                    date: newDate,
                    message: 'Ok',
                    status: 'received'
                } 
                this.contacts[this.currentChat].messages.push(newSentMessagx);   

            }, 2000)
        },

        getLastMessage(item){
            const arraymsg = item.messages.filter((message) => {
                return message.status === 'received';
            })
            console.log(arraymsg);
            return arraymsg[arraymsg.length - 1];
        },

        findContact(){
            console.log('findContact()');
        }

    },

});

app.mount('#app');