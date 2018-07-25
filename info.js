const personal = {
    pageTitle1: "General Profile Section",
    agreeWith1: "Campaigners are the most likely personality type to believe they have a lucky number.",
    agreeWith2: "It’s not all “nature of the cosmos” discussions with ENFPs – people with this personality type know that sometimes, nothing is as important as simply having fun and experiencing life’s joys. That Intuitive trait lets ENFPs know that it’s time to shake things up, and these wild bursts of enthusiastic energy can surprise even their closest friends.",
    agreeWith3: "ENFPs believe that there are no irrelevant actions, that every shift in sentiment, every move and every idea is part of something bigger. To satisfy their curiosity, ENFPs try to notice all of these things, and to never miss a moment.",
    disagreeWith1: " All this adaptability and spontaneity comes together to form a person who is approachable, interesting and exciting, with a cooperative and altruistic spirit and friendly, empathetic disposition. ENFPs get along with pretty much everyone, and their circles of friends stretch far and wide.",
    disagreeWith2: "If there’s a challenge ENFPs face when selecting a career, it isn’t that they lack talent or options or drive, it’s that there are so many things out there that are just cool.",
    disagreeWith3: "ENFP parents are playful and warm, and love to see their children excited, playing in and experimenting with the world around them. It is likely that ENFP parents will encourage this play and growth by suggesting activities and lessons.",



    pageTitle2: "People Like Me Section",
    personLikeMe1: "Robert Downey, Jr.",
    personLikeMe2: "Will Smith",
    personLikeMe3: "Michael Scott from The Office",
    personLikeMe4: "Robin Williams",




    pageTitle3: "Comunication Section",
    howICommunicate: "I am very much a hands on communicator. I need to see things and got over every detail of why something is done and how it effects everything around it. Without doing this I often get lost in thought and will tend to get anxious or feel confused.",
    instructorsCommunicate: "I enjoy that we often have several different people teaching us so that we can always see new or different methods on how things are done. Instructors are almost always avalible for questions, unless helping another student already, and we helping they are very patient as I try to work through or figure out things with them.",
    teammatesCommunicate: "Everyone in class has been so helpful and almost always willing to walk through a problem with you. Nobody ever feels like they are babysitting each other, simply guiding a friend and class mate to a solution since everyone learns at different rates.",
}


function setData(nameTag, jsObject){    
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
}

setData("General Profile", personal); //change yours to whatever your page is and nametag you want





