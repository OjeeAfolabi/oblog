import SideBar from "@/components/AdminComponents/SideBar";

export default function Layout({children}){
    return(
        <>
            <div>
                <SideBar/>
            </div>

        {children}
        </>
    )
}