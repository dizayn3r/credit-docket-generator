function Field({ label, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className="border border-gray-300 rounded px-3 py-2 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default function CourseDetailsForm({ data, onChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field label="Name of Course" name="courseName" data={data} onChange={onChange} />
      <Field label="Institute Name" name="instituteName" data={data} onChange={onChange} />
      <Field label="Institute Address" name="instituteAddress" data={data} onChange={onChange} />
      <Field label="Institute Category" name="instituteCategory" data={data} onChange={onChange} />
      <Field label="Date of Commencement" name="commencementDate" data={data} onChange={onChange} />
      <Field label="Security" name="security" data={data} onChange={onChange} />
      <Field label="Interest during Moratorium (Y/N)" name="interestDuringMoratorium" data={data} onChange={onChange} />
      <Field label="Margin (%)" name="margin" data={data} onChange={onChange} />
      <Field label="Reimbursement (Y/N)" name="reimbursement" data={data} onChange={onChange} />
      <Field label="Rate of Interest (%)" name="rateOfInterest" data={data} onChange={onChange} />
      <Field label="Insurance (F / NF)" name="insurance" data={data} onChange={onChange} />
      <Field label="Moratorium Period (months)" name="moratoriumPeriod" data={data} onChange={onChange} />
      <Field label="Expected Income" name="expectedIncome" data={data} onChange={onChange} />
      <Field label="Loan Tenure (months)" name="loanTenure" data={data} onChange={onChange} />
    </div>
  );
}
