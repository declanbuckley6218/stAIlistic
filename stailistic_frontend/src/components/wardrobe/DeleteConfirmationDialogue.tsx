interface DeleteConfirmationInterface {
   onConfirm: () => void;
    onCancel: () => void;
    isDeleting: boolean;
}

export default function ConfirmDelete({
    onConfirm,
    onCancel,
    isDeleting,
}: DeleteConfirmationInterface) {
    return (
        <div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/30"
            onClick={(e) => e.stopPropagation()}
        >
            <div
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="delete-title"
                aria-describedby="delete-description"
                className="w-80 rounded-xl border border-gray-200 bg-white p-5 shadow-xl"
            >
                <h3
                    id="delete-title"
                    className="text-lg font-semibold text-gray-900"
                >
                    Confirm Delete
                </h3>

                <p
                    id="delete-description"
                    className="mt-2 text-sm text-gray-600"
                >
                    Are you sure you would like to permanently delete this item?
                </p>

                <div className="mt-5 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={isDeleting}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={isDeleting}
                        autoFocus
                        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
                    >
                        {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
}