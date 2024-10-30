let MyHeader =[
    {
        "type" : "main",
        "id" : "container",
        "tailClass" : "w-4/6 mx-auto",
        "content" : "",
        "parent" : "root"
    },
    {
        "type" : "header",
        "id" : "header",
        "tailClass" : "bg-teal-800 text-white",
        "content" : "",
        "parent" : "container"
    },
    {
        "type" : "h1",
        "id" : "title",
        "tailClass" : "md:text-3xl text-2xl text-center",
        "content" : "tout doux les todo",
        "parent" : "header"
    },
    {
        "type" : "nav",
        "id" : "nav",
        "tailClass" : "flex justify-center items-center space-x-4",
        "content" : "",
        "parent" : "header"
    },
    {
        "type" : "button",
        "id" : "btnDisplayTask",
        "tailClass" : "action text-center",
        "content" : "Afficher les tâches",
        "parent" : "nav"
    },
    {
        "type" : "button",
        "id" : "btnAddTask",
        "tailClass" : "action text-center",
        "content" : "Ajouter une tâche",
        "parent" : "nav"
    }
]
