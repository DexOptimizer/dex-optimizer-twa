import DropDown from "../UI/DropDown/DropDown"
import Input from "../UI/Input/Input"

const Optimize = () => {
    return(
        <>
            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
                <Input/>
                <DropDown/>
                <span id="service_fee">1</span>
                <img></img>
            </div>
        </>
    )
}
export { Optimize }