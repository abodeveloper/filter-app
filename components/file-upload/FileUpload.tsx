import { UploadIcon } from "lucide-react";
import React from "react";
import { useDropzone } from "react-dropzone";
import { Typography } from "../typography/Typography";
import { CloseIcon, FileIcon } from "../icons/icons";

function FileUpload({
  label,
  filesLabel,
}: {
  label?: string;
  filesLabel?: string;
}) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li
      key={file.path}
      className="flex items-center justify-between bg-inputBg py-4 px-5 rounded-lg"
    >
      <div className="flex items-center gap-2">
        <FileIcon />
        {file.name}
      </div>
      <CloseIcon width={24} height={24} />
    </li>
  ));

  return (
    <>
      {label ? (
        <label htmlFor={label} className="font-medium">
          {label}
        </label>
      ) : null}
      <section className="w-full border border-dashed border-borderColor rounded-md">
        <div
          {...getRootProps({ className: "dropzone" })}
          className="flex flex-col items-center justify-center py-7"
        >
          <UploadIcon />
          <input {...getInputProps()} />
          <Typography
            variant="body"
            size="sm"
            className="text-primary w-36 text-center mt-4"
          >
            Drop your files here, or
            <span className="text-blue-500"> click to browser</span>
          </Typography>
        </div>
      </section>
      <div className="mt-3 flex justify-between">
        <Typography className="text-textSecondary" size="xs" variant="body">
          Upload high quality image
        </Typography>
        <Typography className="text-textSecondary" size="xs" variant="body">
          10MB total limit
        </Typography>
      </div>
      <aside>
        {filesLabel && (
          <Typography variant="body" size="sm" className="text-primary my-3">
            {filesLabel}
          </Typography>
        )}
        <ul className="flex flex-col gap-2">{files}</ul>
      </aside>
    </>
  );
}

export default FileUpload;
