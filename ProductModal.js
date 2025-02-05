// ProductModal.js
const ProductModal = ({ isOpen, onClose, products }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
          {/* Modal content */}
        </div>
      </div>
    );
  };
  
  export default ProductModal;
  