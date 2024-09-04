import { useSelector } from "react-redux";
import { lang } from "../../utils/constants";

const SearchContainer = () => {
    const language = useSelector((state) => state.gpt.language )
    return(
        <>
        <input type="input"  placeholder={lang[language].placeholder}/>
        </>
    )
}
export default SearchContainer;