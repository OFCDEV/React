//Atom requires a single object
//key is used to uniquly identify items
//Recoil gives access to 3 APIs; 

//1.useRecoilState-->Same as useState
//2.useRecoilValue-->Just give the value
//3.useSetRecoilValue-->Set value

import {atom} from "recoil"

export const countAtom = atom({
    key: "countAtom",
    default:0
})