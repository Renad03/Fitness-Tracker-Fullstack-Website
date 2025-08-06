import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const packageOptions = [
  { name: 'Basic Package', days: '2days/week', price: 500 },
  { name: 'Premium Package', days: '3days/week', price: 750 },
  { name: 'VIP Package', days: '5days/week', price: 1200 },
];

const instructorOptions = [
  { name: 'John Doe', specialty: 'Ypga Instructor' },
  { name: 'Jane Smith', specialty: 'Nutrition Expert' },
  { name: 'Mike Johnson', specialty: 'Physical Therapist' },
  { name: 'Sam Cole', specialty: 'Personal Trainer' },
  { name: 'Laura Brown', specialty: 'Health Coach' },
  { name: 'Emma White', specialty: 'Fitness Specialist' },
  { name: 'Chris Green', specialty: 'Strength Coach' },
  { name: 'Olivia Lee', specialty: 'Pilates Expert' },
  { name: 'Stan Lee', specialty: 'Pilates Expert' },
  { name: 'Robert Di Nero', specialty: 'Pilates Expert' },
  { name: 'Chris Evans', specialty: 'Pilates Expert' },
];

export default function GymBookingForm() {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(packageOptions[0]);
  const [isPackageDropdownOpen, setIsPackageDropdownOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(instructorOptions[0]);
  const [isInstructorDropdownOpen, setIsInstructorDropdownOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [showCashInfo, setShowCashInfo] = useState(false);

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const packageDropdownRef = useRef(null);
  const instructorDropdownRef = useRef(null);
  const [hoveredPackageOption, setHoveredPackageOption] = useState(null);
  const [hoveredInstructorOption, setHoveredInstructorOption] = useState(null);

  useEffect(() => {
    const now = new Date();
    const optionsDate = { year: 'numeric', month: 'short', day: 'numeric' };
    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
    setStartDate(now.toLocaleDateString(undefined, optionsDate));
    setStartTime(now.toLocaleTimeString(undefined, optionsTime));
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
    setIsPackageDropdownOpen(!isPackageDropdownOpen);
    setIsInstructorDropdownOpen(false);
  };

  const selectPackageOption = (option) => {
    const selected = packageOptions.find((p) => p.name === option);
    if (selected) {
      setSelectedPackage(selected);
      setIsPackageDropdownOpen(false);
      setHoveredPackageOption(null);
    }
  };

  const toggleInstructorDropdown = () => {
    setIsInstructorDropdownOpen(!isInstructorDropdownOpen);
    setIsPackageDropdownOpen(false);
  };

  const selectInstructorOption = (option) => {
    const selected = instructorOptions.find((i) => i.name === option);
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
    alert(`Booking confirmed for ${selectedPackage.name} with ${selectedInstructor.name}. Total cost: ${selectedPackage.price}EGP. Please pay at any of our branches.`);
  };

  const handleMouseEnterPackageArea = () => {
    if (isInstructorDropdownOpen) {
      setIsInstructorDropdownOpen(false);
    }
    setIsPackageDropdownOpen(true);
  };

  const handleMouseEnterInstructorArea = () => {
    if (isPackageDropdownOpen) {
      setIsPackageDropdownOpen(false);
    }
    setIsInstructorDropdownOpen(true);
  };

  const handleMouseLeavePackageArea = () => {
    setTimeout(() => {
      if (packageDropdownRef.current && !packageDropdownRef.current.matches(':hover')) {
        setIsPackageDropdownOpen(false);
      }
    }, 100);
  };

  const handleMouseLeaveInstructorArea = () => {
    setTimeout(() => {
      if (instructorDropdownRef.current && !instructorDropdownRef.current.matches(':hover')) {
        setIsInstructorDropdownOpen(false);
      }
    }, 100);
  };

  return (
    <div className="bg-black text-white p-4 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        {}
        {currentFrame === 1 && !showCashInfo && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold" style={{ cursor: 'default' }}>Book Your Package</h2>

            <div>
              <div className="text-sm mb-1" style={{ cursor: 'default' }}>Select Package</div>
              <div
                className="relative"
                onMouseLeave={handleMouseLeavePackageArea}
                onMouseEnter={handleMouseEnterPackageArea}
              >
                <div
                  className="bg-white text-black p-2 rounded-md flex justify-between items-center cursor-pointer"
                  onClick={togglePackageDropdown}
                  style={{ cursor: 'pointer' }}
                >
                  <span style={{ cursor: 'default' }}>{selectedPackage.name}</span>
                  <X className="h-4 w-4 text-gray-400" style={{ cursor: 'pointer' }} />
                </div>
                {isPackageDropdownOpen && (
                  <div
                    ref={packageDropdownRef}
                    className="absolute top-full left-0 right-0 bg-white text-black rounded-md shadow-md z-10"
                  >
                    {packageOptions.map((option) => (
                      <div
                        key={option.name}
                        className={`p-2 cursor-pointer`}
                        onClick={() => selectPackageOption(option.name)}
                        onMouseEnter={() => setHoveredPackageOption(option.name)}
                        onMouseLeave={() => setHoveredPackageOption(null)}
                        style={{
                          cursor: 'pointer',
                          backgroundColor:
                            hoveredPackageOption === option.name ? 'red' : 'transparent',
                          color: 'black',
                        }}
                      >
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-red-500 text-xs mt-1" style={{ cursor: 'default' }}>{selectedPackage.days}</div>
            </div>

            <div>
              <div className="text-sm mb-1" style={{ cursor: 'default' }}>Select Gym Instructor</div>
              <div
                className="relative"
                onMouseLeave={handleMouseLeaveInstructorArea}
                onMouseEnter={handleMouseEnterInstructorArea}
              >
                <div
                  className="bg-white text-black p-2 rounded-md flex justify-between items-center cursor-pointer"
                  onClick={toggleInstructorDropdown}
                  style={{ cursor: 'pointer' }}
                >
                  <span style={{ cursor: 'default' }}>{selectedInstructor.name}</span>
                  <X className="h-4 w-4 text-gray-400" style={{ cursor: 'pointer' }} />
                </div>
                {isInstructorDropdownOpen && (
                  <div
                    ref={instructorDropdownRef}
                    className="absolute top-full left-0 right-0 bg-white text-black rounded-md shadow-md z-10"
                  >
                    {instructorOptions.map((option) => (
                      <div
                        key={option.name}
                        className={`p-2 cursor-pointer`}
                        onClick={() => selectInstructorOption(option.name)}
                        onMouseEnter={() => setHoveredInstructorOption(option.name)}
                        onMouseLeave={() => setHoveredInstructorOption(null)}
                        style={{
                          cursor: 'pointer',
                          backgroundColor:
                            hoveredInstructorOption === option.name ? 'red' : 'transparent',
                          color: 'black',
                        }}
                      >
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-red-500 text-xs mt-1" style={{ cursor: 'default' }}>{selectedInstructor.specialty}</div>
            </div>

            <div>
              <div className="text-sm mb-1" style={{ cursor: 'default' }}>Start Date & Time</div>
              <div className="text-red-500 text-sm" style={{ cursor: 'default' }}>{startDate}</div>
              <div className="text-red-500 text-sm" style={{ cursor: 'default' }}>{startTime}</div>
            </div>

            <div>
              <div className="text-sm mb-2" style={{ cursor: 'default' }}>Payment Method</div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="visa"
                  value="Visa"
                  checked={paymentMethod === 'Visa'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2 cursor-pointer"
                />
                <label htmlFor="visa" className="mr-4 cursor-pointer" style={{ cursor: 'pointer' }}>Visa</label>
                <input
                  type="radio"
                  id="cash"
                  value="Cash"
                  checked={paymentMethod === 'Cash'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2 cursor-pointer"
                />
                <label htmlFor="cash" className="cursor-pointer" style={{ cursor: 'pointer' }}>Cash</label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xl font-bold" style={{ cursor: 'default' }}>{selectedPackage.price}EGP</div>
              <button
                onClick={handleNext}
                className="bg-red-500 text-white px-4 py-2 rounded-md text-sm cursor-pointer"
                style={{ backgroundColor: 'red', color: 'white', cursor: 'pointer' }}
              >
                Book Now
              </button>
            </div>
          </div>
        )}

        {/* Cash Payment Info Screen */}
        {showCashInfo && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold" style={{ cursor: 'default' }}>Payment Information</h2>
            <div className="text-xl font-bold" style={{ cursor: 'default' }}>Total Cost: {selectedPackage.price}EGP</div>
            <div className="text-sm" style={{ cursor: 'default' }}>Please pay at any of our branches.</div>
            <button
              onClick={handleConfirmCash}
              className="bg-red-500 text-white px-4 py-2 rounded-md text-sm cursor-pointer"
              style={{ cursor: 'pointer', backgroundColor: 'red', color: 'white' }}
            >
              Confirm
            </button>
          </div>
        )}

        {/* Frame 3: Visa Payment Info */}
        {currentFrame === 3 && paymentMethod === 'Visa' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold" style={{ cursor: 'default' }}>Payment</h2>

            <div>
              <div className="text-sm mb-1" style={{ cursor: 'default' }}>Credit Card Number</div>
              <input
                type="text"
                placeholder="XXXX XXXX XXXX XXXX"
                className="w-full bg-white text-black p-2 rounded-md text-sm"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                style={{ cursor: 'text' }}
              />
            </div>

            <div>
              <div className="text-sm mb-1" style={{ cursor: 'default' }}>Card Holder Name</div>
              <input
                type="text"
                className="w-full bg-white text-black p-2 rounded-md text-sm"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                style={{ cursor: 'text' }}
              />
            </div>

            <div>
              <div className="text-sm mb-1" style={{ cursor: 'default' }}>Expiration Date</div>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full bg-white text-black p-2 rounded-md text-sm"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                style={{ cursor: 'text' }}
              />
            </div>

            <div>
              <div className="text-sm mb-1" style={{ cursor: 'default' }}>CVV</div>
              <input
                type="text"
                placeholder="XXX"
                className="w-full bg-white text-black p-2 rounded-md text-sm"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                style={{ cursor: 'text' }}
              />
            </div>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md text-sm cursor-pointer"
              style={{ backgroundColor: 'red', color: 'white', cursor: 'pointer' }}
            >
              Proceed To Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}