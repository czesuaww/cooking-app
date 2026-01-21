export const postsPL = [
    {
        id: 1,
        name: 'Przepisz na naleśniki',
        shortContent: 'Na naturalnym mleku',
        longContent: 'Wymieszaj jaja z mąką i dodaj oleju',
        image: 'https://picsum.photos/id/237/200/300'
    },
    {
        id: 2,
        name: 'Przepisz na kebaba',
        shortContent: 'Na naturalnym cieście',
        longContent: 'Wymieszaj jaja z mąką i dodaj oliwy do pizzy',
        image: 'https://picsum.photos/id/237/200/300'
    },
    {
        id: 3,
        name: 'Przepisz na pizze',
        shortContent: 'Na naturalnym sosie',
        longContent: 'Dodaj sosu pomidorowego i oregano i jakieś reaper żeby Ci spiekło',
        image: 'https://picsum.photos/id/237/200/300'
    },
    {
        id: 4,
        name: 'Przepisz na zupe z dynii',
        shortContent: 'Na naturalnej dynii',
        longContent: 'Obierać dynie trzeba ciężko jest, ale jak zrobisz to wychodzi',
        image: 'https://picsum.photos/id/237/200/300'
    },
    {
        id: 5,
        name: 'Przepisz na zupe z dynii',
        shortContent: 'Na naturalnej dynii',
        longContent: 'Obierać dynie trzeba ciężko jest, ale jak zrobisz to wychodzi',
        image: 'https://picsum.photos/id/237/200/300'
    }
]

export const initState = {
    poststsAll: postsPL,
    success: null,
    error: {},
    values: {
        email: '',
        password: ''
    }
}

export const randomRecepieFun = () => {
    const randomIndex = Math.floor(Math.random() * postsPL.length);
    return postsPL[randomIndex];
}

export const randomRecepie = randomRecepieFun();