import ModalProduk from "@/components/ModalProduk";
import { Empty, Spin, Tooltip } from "antd";
import { useState } from "react";
import { FaPlus, FaPen, FaTrashAlt } from "react-icons/fa";

export default function Home() {
  const [modalProduk, setModalProduk] = useState(false);
  const [editData, setEditData] = useState(false);

  const dummyData = [
    {
      id: 1,
      name: "Televisi",
      price: 1000000,
    },
  ];

  return (
    <div className="container mt-5">
      <div className="bg-white rounded-3 p-4">
        <div className="bg-white d-md-flex justify-content-between align-items-center rounded-top mb-4">
          <h3 className="fw-black mb-md-0 mb-4 text-neutral-100 text-left">
            Daftar Produk
          </h3>
          <div className="d-flex flex-md-row flex-column gap-3">
            <button
              type="button"
              className="btn-md btn-primary-main mb-md-0 mb-2 d-flex align-items-center justify-content-center"
              style={{ cursor: "pointer" }}
              onClick={() => setModalProduk(true)}
            >
              <div className="d-flex align-items-center justify-content-center">
                <FaPlus className="me-2" size={17} color={"#fff"} />
                <span className="text-white fs-16 fw-700">Tambah</span>
              </div>
            </button>
          </div>
        </div>
        <div className="mt-3 fs-14 text-neutral-90 fw-600 p-0">
          Menampilkan <span className="fw-black text-neutral-100"></span> dari
          total <span className="fw-black text-neutral-100">0</span>{" "}
        </div>
        <div className=" mt-4">
          <Spin spinning={false}>
            <div
              className={`table-responsive bg-white`}
              style={{
                borderRadius: "8px",
                top: "116px",
                transition: "0.3s",
              }}
            >
              <table
                className="table-digipay"
                style={{
                  margin: "0",
                  padding: "0",
                }}
              >
                <thead>
                  <tr>
                    <th
                      className="fs-16 text-neutral-100 fw-700 p-3"
                      style={{
                        width: "5%",
                      }}
                    >
                      No
                    </th>
                    <th
                      className="fs-16 fw-700 text-neutral-100 p-3 text-left"
                      style={{
                        width: "40%",
                      }}
                    >
                      Nama Produk
                    </th>
                    <th
                      className="fs-16 fw-700 text-neutral-100 p-3 text-left"
                      style={{
                        width: "40%",
                      }}
                    >
                      Harga
                    </th>
                    <th
                      className="fs-16 fw-700 text-neutral-100 text-center"
                      style={{
                        width: "15%",
                      }}
                    >
                      Aksi
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div
              className="table-responsive bg-white pb-4"
              style={{
                borderBottomRightRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            >
              <table
                className="table-digipay"
                style={{
                  margin: "0",
                  padding: "0",
                }}
              >
                {dummyData.length ? (
                  <tbody>
                    {dummyData.map((d, idx) => (
                      <tr
                        key={d.id}
                        style={{
                          color: "#8589A0",
                          fontWeight: "500",
                        }}
                        className="fs-14 text-neutral-90 fw-500"
                      >
                        <td
                          className="text-md-center"
                          data-th="No"
                          style={{ width: "5%" }}
                        >
                          {idx + 1}
                        </td>
                        <td data-th="Nama Produk" style={{ width: "40%" }}>
                          <div className="d-flex flex-column">
                            <Tooltip title={d.name}>
                              <span className="fs-14 text-neutral-100 clamp-1 ms-4 ms-lg-0">
                                {d.name || "-"}
                              </span>
                            </Tooltip>
                          </div>
                        </td>
                        <td
                          data-th="Harga"
                          className="td-auto"
                          style={{ width: "40%", overflow: "auto" }}
                        >
                          <div>{d.price}</div>
                        </td>
                        <td
                          data-th="Aksi"
                          style={{ width: "15%" }}
                          className="text-md-center text-left"
                        >
                          <div className="d-flex justify-content-md-center justify-content-start align-items-center flex-row gap-3">
                            <button className="d-flex align-items-center justify-content-center btn-icon btn-outline-primary">
                              <FaPen size={16} />
                            </button>
                            <button className="d-flex align-items-center justify-content-center btn-icon btn-outline-danger">
                              <FaTrashAlt size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <Empty />
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </Spin>
        </div>
      </div>
      <ModalProduk
        modalProduk={modalProduk}
        setModalProduk={setModalProduk}
        editData={editData}
        setEditData={setEditData}
      />
    </div>
  );
}
