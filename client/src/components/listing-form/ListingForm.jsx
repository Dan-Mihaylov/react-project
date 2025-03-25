export default function ListingForm(
    {
        data,
        formAction,
    }
) {


    return (
        <div className="container mt-4">
            <div className="card shadow p-4">
                {data._ownerId
                    ? <h5 className="mb-3 text-left">Edit Property</h5>
                    : <h5 className="mb-3 text-left">Add New Property</h5>
                }
                <form action={formAction}>
                    {/* Title */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="title">Property Title</label>
                                <input type="text" name="title" id="title" className="form-control" placeholder="Enter property title" defaultValue={data.title} required />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="type">Property Type</label>
                                <input type="text" name="type" id="type" className="form-control" placeholder="ex. Apartment, House, Vila . . ." defaultValue={data.type} required />
                            </div>
                        </div>

                        {/* Thumbnail */}
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="thumbnail">Thumbnail Image URL</label>
                                <input type="url" name="thumbnail" id="thumbnail" className="form-control" placeholder="Enter image URL" defaultValue={data.thumbnail} required />
                            </div>
                        </div>
                    </div>

                    {/* Address */}

                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="title">Country</label>
                                <input type="text" name="country" id="country" className="form-control" placeholder="Enter country" defaultValue={data.address ? data.address.country : ''} required />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="city">City</label>
                                <input type="text" name="city" id="city" className="form-control" placeholder="Enter city" defaultValue={data.address ? data.address.city : ''} required />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="postcode">Postcode</label>
                                <input type="text" name="postcode" id="postcode" className="form-control" placeholder="Enter postcode" defaultValue={data.address ? data.address.postcode : ''} required />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="street">Property Street and Street Number</label>
                                <input type="text" name="street" id="street" className="form-control" placeholder="Enter property street" defaultValue={data.address ? data.address.street : ''} required />
                            </div>
                        </div>
                    </div>

                    {/* Bedrooms, Bathrooms, Sq. Meters (Same Row) */}
                    <div className="row">
                        <div className="col-md-3">
                            <label className="form-label" htmlFor="price">Price</label>
                            <input type="number" name="price" id="price" className="form-control" defaultValue={data.price} required />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label" htmlFor="bedrooms">Bedrooms</label>
                            <input type="number" name="bedrooms" id="bedrooms" className="form-control" defaultValue={data.bedrooms} required />
                        </div>

                        <div className="col-md-3">
                            <label className="form-label" htmlFor="bathrooms">Bathrooms</label>
                            <input type="number" name="bathrooms" id="bathrooms" className="form-control" defaultValue={data.bathrooms} required />
                        </div>

                        <div className="col-md-3">
                            <label className="form-label" htmlFor="sqMeters">Size (sq meters)</label>
                            <input type="number" name="sqMeters" id="sqMeters" className="form-control" defaultValue={data.sqMeters} required />
                        </div>
                    </div>

                    {/* Garage & Garden Checkboxes (Same Row) */}
                    <div className="row mt-3">
                        <div className="col-md-3">
                            <div className="form-check">
                                <input type="checkbox" name="garage" className="form-check-input" id="garage" defaultChecked={Boolean(data?.garage)} />
                                <label className="form-check-label" htmlFor="garage">Has Garage</label>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="form-check">
                                <input type="checkbox" name="garden" className="form-check-input" defaultChecked={!!data.garden} id="garden" />
                                <label className="form-check-label" htmlFor="garden" >Has Garden</label>
                            </div>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="row mt-3">

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="imageUrl1">Additional Image 1</label>
                                <input type="url" name="image1" id="imageUrl1" className="form-control" defaultValue={data.image1} placeholder="Enter image URL" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="imageUrl2">Additional Image 2</label>
                                <input type="url" name="image2" id="imageUrl2" className="form-control" defaultValue={data.image2} placeholder="Enter image URL" />
                            </div>
                        </div>

                    </div>

                    {/* Description */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="description">Description</label>
                        <textarea name="description" className="form-control" id="description" rows="4" defaultValue={data.description} placeholder="Enter property description"></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100">{data._ownerId ? "Edit Property" : "Add Property"}</button>
                </form>
            </div>
        </div>
    );
};
