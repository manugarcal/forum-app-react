

const getState = ({ getStore, getActions, setStore, setActions }) => {
    return {
        store:{
            topics: [],
            title: null,
            content: null
        
        },
        actions:{
            handleChange: (e) => {
                setStore({
                    [e.target.name]: e.target.value,
                });
              },
            handleSubmit: (e, title) => {
                e.preventDefault();
                let store = getStore();
                setStore({
                    topics: store.topics.concat(title)
                })
            },
            handleSubmitTopics: (e) => {
                e.preventDefault();
                const store = getStore();
                const {title, content} = store;
                const data = {
                    title: title,
                    content: content
                }
                console.log(data)
                fetch("http://localhost:5000/api/topics", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'applications/json'
                },
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log("success:", data);
                })
                .catch((error) => {
                    console.error("error:", error)
                })
            }
            
                
                
            

        }

    }
}

export default getState;