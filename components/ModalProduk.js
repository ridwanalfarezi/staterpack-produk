import { addProduct, editProduct } from "@/client/ProdukClient";
import { Modal, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const initialFormData = {
  nama: "",
  harga: "",
  deskripsi: "",
};
const ModalProduk = ({
  setModalProduk,
  modalProduk,
  editData,
  setEditData,
  _getProducts,
}) => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setFormData(initialFormData);
    setModalProduk(false);
    setEditData(false);
  };

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    setLoading(true);
    try {
      const { data } = editData?.id
        ? await editProduct(editData?.id, formData)
        : await addProduct(formData);

      if (data) {
        message.success("Produk Berhasil Ditambahkan");
        handleCancel();
        _getProducts();
      } else {
        message.error("Terjadi Kesalahan");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };

  useEffect(() => {
    setLoading(true)
    if (editData) {
      setFormData({
        nama: editData?.nama,
        harga: editData?.harga,
        deskripsi: editData?.deskripsi || "-",
      });
    } else {
      setFormData(initialFormData);
    }
    setLoading(false)
  }, [editData]);

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
            onChange={handleChangeInput}
            value={formData?.nama}
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
            onChange={handleChangeInput}
            value={formData?.harga}
          />
        </div>

        <div className="mt-4">
          <label
            for="deskripsi"
            className="form-label fs-12 text-neutral-100 algin-right text-left fw-600 mb-2"
          >
            Deskripsi
          </label>
          <textarea
            placeholder="Masukkan Deskripsi"
            className="form-control fw-600 text-neutral-100 "
            id="deskripsi"
            name="deskripsi"
            style={{ resize: "none" }}
            onChange={handleChangeInput}
            value={formData?.deskripsi}
          ></textarea>
        </div>

        <div className="d-flex align-items-center justify-content-end pt-4 my-4">
          <button
            className="btn btn-outline-danger me-3"
            onClick={handleCancel}
          >
            Batal
          </button>
          <button
            type="button"
            className="btn btn-primary-main"
            onClick={handleSubmit}
          >
            Simpan
          </button>
        </div>
      </Spin>
    </Modal>
  );
};

export default ModalProduk;
