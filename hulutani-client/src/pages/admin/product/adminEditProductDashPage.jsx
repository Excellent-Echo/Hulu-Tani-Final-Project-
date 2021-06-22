import React,{useEffect} from "react";
import HeaderAdmin from "../../../components/organisms/admin/HeaderAdmin/HeaderAdmin";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SideAdminNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";
import adminEditProductAction from "../../../redux/admin/product/edit/adminEditProductAction";
import adminShowCategoryAction from "../../../redux/admin/category/show/adminShowCategoryAction";

const AdminEditProductDashPage = () => {
  const adminEditProducts = useSelector(state => state.adminEditProducts)
  const adminShowCategory = useSelector((state) => state.adminShowCategory.categories);
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(adminEditProductAction.getProduct(id))
    dispatch(adminShowCategoryAction.getCategories());
  }, [])

  const updateProductHandler= (e) => {
    e.preventDefault()
    dispatch(adminEditProductAction.updateProduct(
      id,
      adminEditProducts.name,
      adminEditProducts.description,
      adminEditProducts.price,
      adminEditProducts.promo,
      adminEditProducts.stock,
      adminEditProducts.measure,
      adminEditProducts.image,
      adminEditProducts.categoriId
    ))
  }
  return (
    <div className="user-select-none">
      <HeaderAdmin />
      <SideAdminNavBar />

      <div className="admin-content-container">
        <div className="h-75 ahdp_recent">
          <h3 className="h-25 d-flex align-items-center">Produk &gt; Ubah</h3>

          <form className="bg-white p-3 rounded-3" onSubmit={updateProductHandler}>
            {/* product name */}
            <div className="mb-3 row">
              <label
                htmlFor="inputProductName"
                className="col-sm-2 col-form-label"
              >
                Nama
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputProductName"
                  placeholder="Enter product name"
                  value={adminEditProducts.name}
                  onChange={e=> dispatch(adminEditProductAction.setName(e.target.value))}
                />
              </div>
            </div>
            {/* product name */}

            {/* product category */}
            <div className="mb-3 row">
              <label
                htmlFor="inputProductCategory"
                className="col-sm-2 col-form-label"
              >
                Kategori
              </label>
              <div className="col-sm-10">
                <select 
                id="inputProductCategory" 
                className="form-select"
                onChange={(e) => dispatch(adminEditProductAction.setCategoryId(e.target.value))}
                >
                <option value={adminEditProducts.categoriId}>Select product category</option>
                  {adminShowCategory.map((data, index) => {
                    return <option value={data.id}>{data.nama}{data.id}</option>;
                  })}
                </select>
              </div>
            </div>
            {/* product category */}

            {/* product description */}
            <div className="mb-3 row">
              <label
                htmlFor="inputProductDescription"
                className="col-sm-2 col-form-label"
              >
                Description
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="inputProductDescription"
                  rows="3"
                  placeholder="Enter product description"
                  value={adminEditProducts.description}
                  onChange={e=> dispatch(adminEditProductAction.setDesctription(e.target.value))}
                />
              </div>
            </div>
            {/* product description */}

            {/* amount product */}
            <div className="mb-3 d-flex">
              <label
                htmlFor="inputAmountProduct"
                className="col-sm-2 col-form-label"
              >
                Jumlah
              </label>
              <div className="input-group mb-3">
                <input
                  id="inputAmountProduct"
                  type="text"
                  className="form-control"
                  placeholder="Enter amount product"
                  value={adminEditProducts.stock}
                  onChange={e=> dispatch(adminEditProductAction.setStock(e.target.value))}
                />
                <span className="input-group-text" id="inputAmountProduct">
                  PCS
                </span>
              </div>
            </div>
            {/* amount product */}

            {/* product price */}
            <div className="mb-3 d-flex">
              <label
                htmlFor="inputProductPrice"
                className="col-sm-2 col-form-label"
              >
                Harga
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputProductPrice">
                  IDR
                </span>
                <input
                  id="inputProductPrice"
                  type="text"
                  className="form-control"
                  placeholder="Enter product price"
                  value={adminEditProducts.price}
                  onChange={e=> dispatch(adminEditProductAction.setPrice(e.target.value))}
                />
              </div>
            </div>
            {/* product price */}

            {/* product image */}
            <div className="mb-3 d-flex">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Gambar
              </label>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                />
              </div>
            </div>
            {/* product image */}

            <Link to="/admin/dash/product">
              <button type="button" className="btn btn-outline-danger">
                Batal
              </button>
            </Link>
            <button type="button" className="btn btn-primary">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminEditProductDashPage;