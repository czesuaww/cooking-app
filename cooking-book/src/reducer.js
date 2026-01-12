const postsPL = [
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
    }
]

export const initState = {
    posts: [],
    poststsAll: postsPL,
    visiblePosts: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'search-posts': {
            const value = (action.payload || '').trim().toLowerCase();
            if (value === '') {
                return {
                    ...state,
                    posts: []
                };
            }
            const filteredPosts = state.poststsAll.filter(post => post.name.toLowerCase().includes(value));
            return {
                ...state,
                posts: filteredPosts
            };
        }
        case 'set-visible-hotels':
            return {
                ...state,
                visiblePosts: action.posts
            }
        default:
            console.warn(`Unknown action: ${action.type}`);
            return state;
    }
}

export const randomRecepieFun = () => {
    const randomIndex = Math.floor(Math.random() * postsPL.length);
    return postsPL[randomIndex];
}

export const randomRecepie = randomRecepieFun();