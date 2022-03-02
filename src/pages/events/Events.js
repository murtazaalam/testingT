import { Events } from '../../components'
const Event = () => {
    let defaultEventCategory = "upcoming";
    return (
        <>
           <Events category={defaultEventCategory} />
        </>
    )
}
export default Event;