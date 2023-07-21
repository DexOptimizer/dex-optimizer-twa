import DropDown from "../components/UI/DropDown/DropDown"
import Input from "../components/UI/Input/Input"

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
            </div>
        </>
    )
}
export default Optimize