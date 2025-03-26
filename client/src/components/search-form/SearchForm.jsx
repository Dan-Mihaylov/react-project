import { useState } from "react"
import { useNavigate } from "react-router";

export default function SearchForm() {
    const [ input, setInput ] = useState('');
    const navigate = useNavigate();

    const onChangeInputHandler = (e) => {
        setInput(e.target.value);
        console.log(input);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const urlSearchParams = new URLSearchParams({
            where: `country="${input}" OR city="${input}" OR street="${input}" OR postcode="${input}"`,
            orderBy: '_createdOn desc'
        });
        navigate(`/listings?${urlSearchParams}`);
    }

    return (
        <form
            onSubmit={ onFormSubmit }
            className="custom-form mt-4 pt-2 mb-lg-0 mb-5"
        >
            <div className="input-group input-group-lg">
                <span
                    className="input-group-text bi-search"
                    id="basic-addon1"
                ></span>
                <input
                    name="search"
                    type="search"
                    className="form-control"
                    id="search"
                    placeholder="Country, City, Street or Postcode  . . ."
                    aria-label="Search"
                    value={ input }
                    onChange={ onChangeInputHandler }
                />
                <button type="submit" className="form-control">
                    Search
                </button>
            </div>
        </form>
    )

}