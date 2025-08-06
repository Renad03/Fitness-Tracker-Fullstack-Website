import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';

const packageOptions = [
  { name: 'Basic Package', days: '2days/week', price: 500 },
  { name: 'Premium Package', days: '3days/week', price: 750 },
  { name: 'VIP Package', days: '5days/week', price: 1200 },
];

export default function GymBookingForm() {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(packageOptions[0]);
  const [isPackageDropdownOpen, setIsPackageDropdownOpen] = useState(false);

  const [instructorOptions, setInstructorOptions] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [isInstructorDropdownOpen, setIsInstructorDropdownOpen] = useState(false);

  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [showCashInfo, setShowCashInfo] = useState(false);

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const [hoveredPackageOption, setHoveredPackageOption] = useState(null);
  const [hoveredInstructorOption, setHoveredInstructorOption] = useState(null);

  const packageDropdownRef = useRef(null);
  const instructorDropdownRef = useRef(null);

  useEffect(() => {
    const now = new Date();
    const optionsDate = { year: 'numeric', month: 'short', day: 'numeric' };
    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
    setStartDate(now.toLocaleDateString(undefined, optionsDate));
    setStartTime(now.toLocaleTimeString(undefined, optionsTime));

    const fetchInstructors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/trainers/');
        setInstructorOptions(response.data);
        if (response.data.length > 0) {
          setSelectedInstructor(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching instructors:', error);
      }
    };

    fetchInstructors();
  }, []);

  const handleNext = () => {
    if (paymentMethod === 'Visa') {
      setCurrentFrame(3);
      setShowCashInfo(false);
    } else if (paymentMethod === 'Cash') {
      setShowCashInfo(true);
      setCurrentFrame(1);
    }
  };

  const togglePackageDropdown = () => {
    setIsPackageDropdownOpen((prev) => !prev);
    setIsInstructorDropdownOpen(false);
  };

  const selectPackageOption = (optionName) => {
    const selected = packageOptions.find((p) => p.name === optionName);
    if (selected) {
      setSelectedPackage(selected);
      setIsPackageDropdownOpen(false);
      setHoveredPackageOption(null);
    }
  };

  const toggleInstructorDropdown = () => {
    setIsInstructorDropdownOpen((prev) => !prev);
    setIsPackageDropdownOpen(false);
  };

  const selectInstructorOption = (optionName) => {
    const selected = instructorOptions.find((i) => i.name === optionName);
    if (selected) {
      setSelectedInstructor(selected);
      setIsInstructorDropdownOpen(false);
      setHoveredInstructorOption(null);
    }
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setShowCashInfo(false);
    setCurrentFrame(1);
  };

  const handleConfirmCash = () => {
    alert(`Booking confirmed for ${selectedPackage.name} with ${selectedInstructor?.name}. Total cost: ${selectedPackage.price}EGP. Please pay at any of our branches.`);
  };

  const handleMouseLeaveDropdown = (ref, setOpen) => {
    setTimeout(() => {
      if (ref.current && !ref.current.matches(':hover')) {
        setOpen(false);
      }
    }, 100);
  };

  return (
    <div className="bg-black text-white p-4 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        {currentFrame === 1 && !showCashInfo && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Book Your Package</h2>

            {/* Package Dropdown */}
            <div>
              <div className="text-sm mb-1">Select Package</div>
              <div
                className="relative"
                onMouseLeave={() => handleMouseLeaveDropdown(packageDropdownRef, setIsPackageDropdownOpen)}
              >
                <div
                  className="bg-white text-black p-2 rounded-md flex justify-between items-center cursor-pointer"
                  onClick={togglePackageDropdown}
                >
                  <span>{selectedPackage.name}</span>
                  <X className="h-4 w-4 text-gray-400" />
                </div>
                {isPackageDropdownOpen && (
                  <div
                    ref={packageDropdownRef}
                    className="absolute top-full left-0 right-0 bg-white text-black rounded-md shadow-md z-10"
                  >
                    {packageOptions.map((option) => (
                      <div
                        key={option.name}
                        className="p-2 cursor-pointer"
                        onClick={() => selectPackageOption(option.name)}
                        onMouseEnter={() => setHoveredPackageOption(option.name)}
                        onMouseLeave={() => setHoveredPackageOption(null)}
                        style={{
                          backgroundColor: hoveredPackageOption === option.name ? 'red' : 'transparent',
                        }}
                      >
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-red-500 text-xs mt-1">{selectedPackage.days}</div>
            </div>

            {/* Instructor Dropdown */}
            <div>
              <div className="text-sm mb-1">Select Gym Instructor</div>
              <div
                className="relative"
                onMouseLeave={() => handleMouseLeaveDropdown(instructorDropdownRef, setIsInstructorDropdownOpen)}
              >
                <div
                  className="bg-white text-black p-2 rounded-md flex justify-between items-center cursor-pointer"
                  onClick={toggleInstructorDropdown}
                >
                  <span>{selectedInstructor?.name || 'Loading...'}</span>
                  <X className="h-4 w-4 text-gray-400" />
                </div>
                {isInstructorDropdownOpen && (
                  <div
                    ref={instructorDropdownRef}
                    className="absolute top-full left-0 right-0 bg-white text-black rounded-md shadow-md z-10"
                  >
                    {instructorOptions.map((option) => (
                      <div
                        key={option.name}
                        className="p-2 cursor-pointer"
                        onClick={() => selectInstructorOption(option.name)}
                        onMouseEnter={() => setHoveredInstructorOption(option.name)}
                        onMouseLeave={() => setHoveredInstructorOption(null)}
                        style={{
                          backgroundColor: hoveredInstructorOption === option.name ? 'red' : 'transparent',
                        }}
                      >
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {selectedInstructor && (
                <div className="text-red-500 text-xs mt-1">{selectedInstructor.specialty}</div>
              )}
            </div>

            {/* Date & Payment */}
            <div>
              <div className="text-sm mb-1">Start Date & Time</div>
              <div className="text-red-500 text-sm">{startDate}</div>
              <div className="text-red-500 text-sm">{startTime}</div>
            </div>

            <div>
              <div className="text-sm mb-2">Payment Method</div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="visa"
                  value="Visa"
                  checked={paymentMethod === 'Visa'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                <label htmlFor="visa" className="mr-4 cursor-pointer">Visa</label>
                <input
                  type="radio"
                  id="cash"
                  value="Cash"
                  checked={paymentMethod === 'Cash'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                <label htmlFor="cash" className="cursor-pointer">Cash</label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">{selectedPackage.price}EGP</div>
              <button
                onClick={handleNext}
                 className="bg-red-500 text-white px-4 py-2 rounded-md text-sm cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        )}

        {showCashInfo && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Payment Information</h2>
            <div className="text-xl font-bold">Total Cost: {selectedPackage.price}EGP</div>
            <div className="text-sm">Please pay at any of our branches.</div>
            <button
              onClick={handleConfirmCash}
              className="bg-red-500 text-white px-4 py-2 rounded-md text-sm"
            >
              Confirm
            </button>
          </div>
        )}

        {currentFrame === 3 && paymentMethod === 'Visa' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Payment</h2>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full bg-white text-black p-2 rounded-md text-sm"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Card Holder"
              className="w-full bg-white text-black p-2 rounded-md text-sm"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full bg-white text-black p-2 rounded-md text-sm"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full bg-white text-black p-2 rounded-md text-sm"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm">
              Proceed To Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
