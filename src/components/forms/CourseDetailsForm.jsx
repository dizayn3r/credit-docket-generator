function Field({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className="border border-gray-300 rounded px-3 py-2 text-sm"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </div>
  );
}

export default function CourseDetailsForm({ data, onChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field label="Name of Course" name="courseName" value={data.courseName} onChange={onChange} />
      <Field label="Institute Name" name="instituteName" value={data.instituteName} onChange={onChange} />
      <Field label="Institute Address" name="instituteAddress" value={data.instituteAddress} onChange={onChange} />
      <Field label="Institute Category" name="instituteCategory" value={data.instituteCategory} onChange={onChange} />
      <Field label="Date of Commencement" name="commencementDate" value={data.commencementDate} onChange={onChange} />
      <Field label="Security" name="security" value={data.security} onChange={onChange} />
      <Field label="Interest during Moratorium (Y/N)" name="interestDuringMoratorium" value={data.interestDuringMoratorium} onChange={onChange} />
      <Field label="Margin (%)" name="margin" value={data.margin} onChange={onChange} />
      <Field label="Reimbursement (Y/N)" name="reimbursement" value={data.reimbursement} onChange={onChange} />
      <Field label="Rate of Interest (%)" name="rateOfInterest" value={data.rateOfInterest} onChange={onChange} />
      <Field label="Insurance (F / NF)" name="insurance" value={data.insurance} onChange={onChange} />
      <Field label="Moratorium Period (months)" name="moratoriumPeriod" value={data.moratoriumPeriod} onChange={onChange} />
      <Field label="Expected Income" name="expectedIncome" value={data.expectedIncome} onChange={onChange} />
      <Field label="Loan Tenure (months)" name="loanTenure" value={data.loanTenure} onChange={onChange} />
    </div>
  );
}
