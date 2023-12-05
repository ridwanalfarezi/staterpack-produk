import { Modal, Spin } from "antd";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const initialFormData = {
  nama: "",
  harga: "",
  deskripsi: "",
}
const ModalProduk = ({
  setModalProduk,
  modalProduk,
  editData,
  setEditData,
}) => {

  const [formData, setFormData] = useState(initialFormData)
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setFormData(initialFormData)
    setModalProduk(false);
    setEditData(false);
  };

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal
      style={{ borderRadius: "4px" }}
      closeIcon={<FaTimes size={24} />}
      title={
        <h5 className="fw-black pb-2 text-neutral-100" id="exampleModalLabel">
          {editData ? "Ubah" : "Tambah"} Produk
        </h5>
      }
      centered
      open={modalProduk}
      onOk={() => {
        handleClickSwal();
      }}
      onCancel={() => handleCancel()}
      width={500}
      footer={null}
      okText="Simpan"
      cancelText="Batal"
    >
      <Spin spinning={loading}>
        <div>
          <label
            for="nama"
            className="form-label fs-12 text-neutral-100 algin-right text-left fw-600 mb-2"
          >
            Nama Produk
          </label>
          <input
            type="text"
            className="form-control input-login fs-12 text-neutral-100 fw-600"
            id="nama"
            name="nama"
            placeholder="Masukkan Nama Produk"
          />
        </div>
        <div className="mt-4">
          <label
            for="nama"
            className="form-label fs-12 text-neutral-100 algin-right text-left fw-600 mb-2"
          >
            Harga
          </label>
          <input
            type="number"
            className="form-control input-login fs-12 text-neutral-100 fw-600"
            id="harga"
            name="harga"
            placeholder="Masukkan Harga"
          />
        </div>

        <div className="mt-4">
          <label
            for="dashboard"
            className="form-label fs-12 text-neutral-100 algin-right text-left fw-600 mb-2"
          >
            Deskripsi
          </label>
          <textarea
            placeholder="Masukkan Deskripsi"
            className="form-control fw-600 text-neutral-100 "
            id="deskripsi"
            name="dashboard"
            style={{ resize: "none" }}
          ></textarea>
        </div>

        <div className="d-flex align-items-center justify-content-end pt-4 my-4">
          <button
            className="btn btn-outline-danger me-3"
            onClick={handleCancel}
          >
            Batal
          </button>
          <button type="button" className="btn btn-primary-main">
            Simpan
          </button>
        </div>
      </Spin>
    </Modal>
  );
};

export default ModalProduk;
