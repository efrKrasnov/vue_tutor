const App = {
    data()  {
        return {
            placeholderString: 'Input note name',
            title: 'Notes List',
            inputValue: '',
            notes: ['Note 1', 'Note 2']
        }
    },
    methods:    {
        addNewNote()    {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(idx)    {
            this.notes.splice(idx, 1)
        },
        toUpperCase(item)   {
            return item.toUpperCase()
        }
    },
    computed: {
        doubleCountComputed()   {
            return this.notes.length * 2
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')
