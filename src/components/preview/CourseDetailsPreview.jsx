function Cell({ children, className = "" }) {
  return (
    <div
      className={`px-4 py-3 leading-snug border-dotted border-gray-400 ${className}`}
    >
      {children || "—"}
    </div>
  );
}

export default function CourseDetailsPreview({ data }) {
  return (
    <div className="w-full mt-6 border border-dotted border-gray-400 text-gray-700">
      {/* Row 1 */}
      <div className="grid grid-cols-[30%_70%] border-b border-dotted border-gray-400">
        <Cell className="font-semibold border-r">
          Name of Course
        </Cell>
        <Cell className="font-medium">
          {data.courseName}
        </Cell>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-[30%_70%] border-b border-dotted border-gray-400">
        <Cell className="font-semibold border-r">
          Institute Name
        </Cell>
        <Cell>{data.instituteName}</Cell>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-[30%_70%] border-b border-dotted border-gray-400">
        <Cell className="font-semibold border-r">
          Institute Address
        </Cell>
        <Cell>{data.instituteAddress}</Cell>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-[30%_20%_30%_20%] border-b border-dotted border-gray-400">
        <Cell className="font-semibold border-r">
          Institute Category
        </Cell>
        <Cell className="border-r">
          {data.instituteCategory}
        </Cell>
        <Cell className="font-semibold border-r">
          Date of Commencement:
        </Cell>
        <Cell>{data.commencementDate}</Cell>
      </div>

      {/* Row 5 */}
      <div className="grid grid-cols-[30%_20%_30%_20%] border-b border-dotted border-gray-400">
        <Cell className="font-semibold border-r">
          Security
        </Cell>
        <Cell className="border-r">
          {data.security}
        </Cell>
        <Cell className="font-semibold border-r">
          Interest to be served during moratorium period:
        </Cell>
        <Cell className="text-center">
          {data.interestDuringMoratorium}
        </Cell>
      </div>

      {/* Row 6 */}
      <div className="grid grid-cols-[30%_20%_30%_20%] border-b border-dotted border-gray-400">
        <Cell className="font-semibold border-r">
          Margin
        </Cell>
        <Cell className="border-r">
          {data.margin}
        </Cell>
        <Cell className="font-semibold border-r">
          Whether claiming re-imbursement:
        </Cell>
        <Cell className="text-center">
          {data.reimbursement}
        </Cell>
      </div>

      {/* Row 7 */}
      <div className="grid grid-cols-[30%_20%_30%_20%] border-b border-dotted border-gray-400">
        <Cell className="font-semibold border-r">
          Rate of Interest
        </Cell>
        <Cell className="border-r">
          {data.rateOfInterest}
        </Cell>
        <Cell className="font-semibold border-r">
          Insurance:
        </Cell>
        <Cell className="text-center">
          {data.insurance}
        </Cell>
      </div>

      {/* Row 8 */}
      <div className="grid grid-cols-[30%_20%_30%_20%] border-b border-dotted border-gray-400">
        <Cell className="font-semibold border-r">
          Moratorium Period
        </Cell>
        <Cell className="border-r">
          {data.moratoriumPeriod}
        </Cell>
        <Cell className="font-semibold border-r">
          Expected Income:
        </Cell>
        <Cell>{data.expectedIncome}</Cell>
      </div>

      {/* Row 9 */}
      <div className="grid grid-cols-[30%_70%]">
        <Cell className="font-semibold border-r">
          Loan Tenure
        </Cell>
        <Cell>{data.loanTenure}</Cell>
      </div>
    </div>
  );
}
