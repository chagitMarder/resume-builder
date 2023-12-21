import { createContext, useContext, useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { database } from '../firebaseConfig'
import { auth } from '../firebaseconfig';
import { onAuthStateChanged } from "firebase/auth";


const cvContext = createContext();

const Provider = ({ children }) => {

    const collectionRef = collection(database, 'resumes');


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        workExperience2: [{
            companyName: "",
            role: "",
            timeFrame: "",
            description: ""
        }],
        workExperience1: [{
            companyName: "",
            role: "",
            timeFrame: "",
            description: ""
        }],
        education1: [{
            school: "",
            course: "",
            description: "",
            timeFrame: ""
        }],
        education2: [{
            school: "",
            course: "",
            description: "",
            timeFrame: ""
        }],
        aboutMe: "",
        ownerId: "",
        imageUrl: ""
    });

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFormData({ ...formData, ownerId: user?.uid })
            }
        });
    }, [])



    const handleSubmit = () => {
        addDoc(collectionRef, formData)
            .then(() => {
                console.log("Data added");
            })
            .catch((err) => {
                console.log(err.message);
            })

    }


    const getDataById = async () => {
        const user = auth.currentUser;
        const userUid = user.uid;
        const q = query(collectionRef, where('ownerId', '==', userUid))
        try {
            const response = await getDocs(q)
            const data = response.docs.map(item => {
                return item.data()
            })
            return data;
        }
        catch (err) {
            console.log(err.message);
        }
    }

    const getDataByAdmin = async () => {
        const querySnapshot = await getDocs(collectionRef);
        const resultArray = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            resultArray.push(doc.data());
        });
        return resultArray;
    }



    const shared = { formData, setFormData, handleSubmit, getDataById, getDataByAdmin }
    return (

        <cvContext.Provider value={shared}>{children}</cvContext.Provider>
    )
}
export { Provider }
export default cvContext