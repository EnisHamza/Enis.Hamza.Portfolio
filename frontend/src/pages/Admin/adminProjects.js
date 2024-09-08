import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Form, message, Modal } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";

function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type = "add", setType] = useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-project", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end mt-5">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {project.map((projects) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col ">
            <div className="flex flex-col flex-grow">
              <h1 className="text-primary text-xl font-bold mb-4">
                {projects.title}
              </h1>
              <hr />
              <br />
              <img src={projects.image} alt="Image" className="h-62 w-80" />
              <h1> Role : {projects.title}</h1>
              <h1>{projects.description}</h1>
            </div>
            <div className="flex justify-center gap-3 mt-auto">
              <button
                className="bg-primary text-white px-5 rounded-md"
                onClick={() => {
                  setSelectedItemForEdit(projects);
                  setShowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-5 rounded-md"
                onClick={() => {
                  onDelete(projects);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModal}
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={
              {
                ...selectedItemForEdit,
                technologies: selectedItemForEdit?.technologies.join(", "),
              } || {}
            }
          >
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="image" label="ImageUrl">
              <input placeholder="ImageUrl" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <textarea placeholder="Description" />
            </Form.Item>

            <Form.Item name="technologies" label="Technologies">
              <input placeholder="Technologies" />
            </Form.Item>

            <div className="flex justify-center">
              <button
                className="border-primary text-primary px-5 py-2"
                onClick={() => {
                  setShowAddEditModal(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminProjects;
