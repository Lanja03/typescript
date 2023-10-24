import User from "./types/type.user";

// any
let me = 'Ihasina' as string; // inferring type implicit
let num: number = 0 as number// explicit
let i: number | string | null | undefined; // union type

// TODO: intersection
// TODO: type generic

// type declaration


// interface
interface ICourse {
    userId: string;
    link: string;
    stars?: number;
    description?: string;
}

type usersData = Array<User>;

let users: usersData = [
    {
        username: 'fali',
        email: 'sdfdrwer',
        password: 'sdfwer'
    },
    {
        username: 'fali',
        email: 'sdfdrwer',
        password: 'sdfwer'
    },
];

const obj: User = {
    username: 'koto',
    email: 'asdsdf@gasdsf.com',
    password: 'M'
}

const postCourse = (course: ICourse) => {
    courseService.post(course)
}

const handleCreateCourse = async () => {
    await postCourse({
        userId: "213458987abcef558865fffcc",
        link: 'sdfaerwer'
    })
}

i = 12
i = 'string'
i = null
i = undefined

const addNumber = (a: number, b: number): number => {
    return a + b
}