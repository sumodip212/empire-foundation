<!-- # SAHAYAK-24 Backend Implementation

## Phase 1: Database Setup (MongoDB)
- [x] Install MongoDB and mongoose
- [ ] Update package.json with mongoose dependency
- [ ] Update server.js to use MongoDB instead of JSON files

## Phase 2: Frontend Integration
- [ ] Create script.js with API calls

## Phase 3: Testing
- [ ] Install dependencies (npm install)
- [ ] Start and test the backend server

## Current Status:
- Backend APIs: COMPLETE (in server.js)
- Database: TO BE MIGRATED (JSON → MongoDB)
- Frontend Integration: TO BE CREATED (script.js) -->


# THE EMPIRE FOUNDATION Backend Implementation

## Phase 1: Project Foundation Setup
- [ ] Create `backend/` folder
- [ ] Initialize Node.js project with `npm init -y`
- [ ] Install core dependencies
- [ ] Create basic folder structure
- [ ] Create `server.js` / `app.js`
- [ ] Setup Express server
- [ ] Setup environment variables with `.env`
- [ ] Setup MongoDB connection
- [ ] Add basic middlewares
- [ ] Create health/test route

## Phase 2: Core Backend Architecture
- [ ] Setup config files
- [ ] Setup routes folder
- [ ] Setup controllers folder
- [ ] Setup models folder
- [ ] Setup middleware folder
- [ ] Setup utils/helpers folder
- [ ] Setup centralized error handling
- [ ] Setup API response structure

## Phase 3: Authentication & Users
- [ ] Create User model
- [ ] Register API
- [ ] Login API
- [ ] Password hashing with bcrypt
- [ ] JWT authentication
- [ ] Role system (`user`, `admin`, `volunteer`, `ngo`)
- [ ] Protected route middleware
- [ ] Profile route

## Phase 4: Contact & Newsletter
- [ ] Create Contact model
- [ ] Build `POST /api/contact`
- [ ] Store contact messages in MongoDB
- [ ] Create Newsletter model
- [ ] Build `POST /api/newsletter`
- [ ] Prevent duplicate newsletter emails

## Phase 5: Emergency / SOS Module
- [ ] Create SOS Alert model
- [ ] Build `POST /api/emergency/sos`
- [ ] Build `GET /api/emergency/contacts`
- [ ] Save emergency request records
- [ ] Add alert status tracking
- [ ] Prepare real user/location integration

## Phase 6: NGO Module
- [ ] Create NGO model
- [ ] Build `GET /api/ngos`
- [ ] Add NGO details
- [ ] Add NGO verification status
- [ ] Add NGO category/filter support

## Phase 7: Blood Donor Module
- [ ] Create Blood Donor model
- [ ] Build `GET /api/blood-donors`
- [ ] Add filters by blood group/location
- [ ] Add donor availability status
- [ ] Add donor registration later

## Phase 8: Jobs / Skill Development Module
- [ ] Create Job model
- [ ] Build `GET /api/jobs`
- [ ] Add job filters
- [ ] Add skill/training related fields

## Phase 9: Government Scheme Module
- [ ] Create Scheme model
- [ ] Build `GET /api/schemes`
- [ ] Add filtering by category/eligibility
- [ ] Prepare for AI guidance later

## Phase 10: Stats Module
- [ ] Build `GET /api/stats`
- [ ] Count volunteers, NGOs, donors, etc.
- [ ] Connect dynamic stats to frontend

## Phase 11: Admin Panel Backend
- [ ] Admin login protection
- [ ] Admin dashboard APIs
- [ ] Manage contacts
- [ ] Manage newsletter subscribers
- [ ] Manage SOS alerts
- [ ] Manage NGOs
- [ ] Manage donors
- [ ] Manage jobs and schemes

## Phase 12: Security & Production Readiness
- [ ] Add input validation
- [ ] Add rate limiting
- [ ] Add Helmet security
- [ ] Configure CORS
- [ ] Add logging
- [ ] Add proper error responses
- [ ] Add `.gitignore`
- [ ] Hide secrets in `.env`

## Phase 13: Testing & Deployment
- [ ] Test all APIs with Postman
- [ ] Connect frontend with backend
- [ ] Fix integration issues
- [ ] Prepare deployment config
- [ ] Deploy backend
- [ ] Deploy database
- [ ] Final production testing

## Current Status:
- Frontend: ALMOST COMPLETE
- Backend: NOT STARTED
- Recommended Stack: Node.js + Express + MongoDB
- Working Style: Build slowly, step by step, properly