const toDo = {
    data() {
        return {
            title: "Список заметок",
            placeholderString: "Введите название заметки",
            inputValue: "",
            notes: ["заметка 1", "заметка 2"]
        }
    },
    methods: {
        inputChange(event) {
            this.inputValue = event.target.value
        },

        addNewNote() {
            if (this.inputValue !== "") {
                this.notes.push(this.inputValue)
                this.inputValue = ""
            }

        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)
        }


    },
    computed: {
        dubleNoutes() {
            return this.notes.length * 2
        }

    },
    watch: {
        inputValue(value) {
            if (value.length > 30) {
                this.inputValue = ""
            }
            console.log("input value ganged", value)
        }
    }
}

Vue.createApp(toDo).mount("#app")