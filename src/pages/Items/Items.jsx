import React, { useState } from "react";
import "../../styles/Items.css";
import ItemsForm from "../../components/addForm/ItemsForm";
import ProductsTable from "../../components/TableData/ProductsTable";
import ServicesTable from "../../components/TableData/ServicesTable";
import party from "../../assets/Images/party.jpg";
import CategoryTable from "../../components/TableData/CategoryTable";
import UnitsTable from "../../components/TableData/UnitsTable";
import CategoryForm from "../../components/addForm/CategoryForm";
import UnitForm from "../../components/addForm/UnitForm";
import StockAdjustment from "../../components/addForm/StockAdjustment";

export default function Items() {
  const [firstSec, setFirstSec] = useState(true);
  const [secondSec, setSecondSec] = useState(false);
  const [thirdSec, setThirdSec] = useState(false);
  const [fourthSec, setFourthSec] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [categoryForm, setCategoryForm] = useState(false);
  const [unitForm, setUnitForm] = useState(false);
  const [adjustItem, setAdjustItem] = useState(false);

  const toggleForm = () => {
    setOpenForm(!openForm);
  };

  const dataFromChild = (val) => {
    setOpenForm(val);
  };

  const closeServiceProductForm = () => {
    setOpenForm(false);
  };

  const openCategoryForm = () => {
    setCategoryForm(true);
  };

  const closeCategoryForm = () => {
    setCategoryForm(false);
  };

  const openUnitForm = () => {
    setUnitForm(true);
  };

  const closeUnitForm = () => {
    setUnitForm(false);
  };

  const openAdjustForm = () => {
    setAdjustItem(true);
  };

  const closeAdjustForm = () => {
    setAdjustItem(false);
  };

  const data = [1];

  const openSection = (val) => {
    console.log("working val", val);
    if (val === 0) {
      setFirstSec(true);
      setSecondSec(false);
      setThirdSec(false);
      setFourthSec(false);
    } else if (val === 1) {
      setFirstSec(false);
      setSecondSec(true);
      setThirdSec(false);
      setFourthSec(false);
    } else if (val === 2) {
      setFirstSec(false);
      setSecondSec(false);
      setThirdSec(true);
      setFourthSec(false);
    } else {
      setFirstSec(false);
      setSecondSec(false);
      setThirdSec(false);
      setFourthSec(true);
    }
  };

  return (
    <div>
      {openForm && <ItemsForm func={closeServiceProductForm} />}
      {categoryForm && <CategoryForm func={closeCategoryForm} />}
      {unitForm && <UnitForm func={closeUnitForm} />}
      {adjustItem && <StockAdjustment func={closeAdjustForm} />}
      <div className="nav">
        <div
          className="nav-opt"
          onClick={() => {
            openSection(0);
          }}
        >
          Products
        </div>
        <div
          className="nav-opt"
          onClick={() => {
            openSection(1);
          }}
        >
          Services
        </div>
        <div
          className="nav-opt"
          onClick={() => {
            openSection(2);
          }}
        >
          Category
        </div>
        <div
          className="nav-opt"
          onClick={() => {
            openSection(3);
          }}
        >
          Units
        </div>
      </div>
      <div className="">
        <div className="">
          {firstSec && (
            <div className="d-cen b-cont">
              {!(data.length > 0) ? (
                <div className="">
                  <div className="">
                    <img src={party} alt="" className="party-img" />
                    <p>
                      Add Products/Items you sell or purchase to manage your
                      full Stock Inventory.
                    </p>
                    <button className="party-button" onClick={toggleForm}>
                      Add Your First Product
                    </button>
                  </div>
                </div>
              ) : (
                <div className="">
                  <ProductsTable
                    func={dataFromChild}
                    adjustForm={openAdjustForm}
                  />
                </div>
              )}
            </div>
          )}
          {secondSec && (
            <div className="d-cen b-cont">
              {!(data.length > 0) ? (
                <div className="">
                  <div className="">
                    <img src={party} alt="" className="party-img" />
                    <p>
                      Add your customers & suppliers. Manage your business with
                      them.
                    </p>
                    <button className="party-button" onClick={toggleForm}>
                      Add Your First Service
                    </button>
                  </div>
                </div>
              ) : (
                <div className="">
                  <ServicesTable func={dataFromChild} />
                </div>
              )}
            </div>
          )}
          {thirdSec && (
            <div className="d-cen b-cont">
              {!(data.length > 0) ? (
                <div className="">
                  <div className="">
                    <img src={party} alt="" className="party-img" />
                    <p>
                      Add your customers & suppliers. Manage your business with
                      them.
                    </p>
                    <button className="party-button" onClick={openCategoryForm}>
                      Add Your First Category
                    </button>
                  </div>
                </div>
              ) : (
                <div className="">
                  <CategoryTable func={openCategoryForm} />
                </div>
              )}
            </div>
          )}
          {fourthSec && (
            <div className="d-cen b-cont">
              {!(data.length > 0) ? (
                <div className="">
                  <div className="">
                    <img src={party} alt="" className="party-img" />
                    <p>
                      Add your customers & suppliers. Manage your business with
                      them.
                    </p>
                    <button className="party-button" onClick={openUnitForm}>
                      Add Your First Units
                    </button>
                  </div>
                </div>
              ) : (
                <div className="">
                  <UnitsTable func={openUnitForm} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}