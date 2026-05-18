# 🎓 Student Management App — AWS 3-Tier Architecture

A full-stack Student Management System deployed on AWS using a 3-tier architecture.

---

#  🏗️ Architecture & Project Structure

![Architecture Diagram](screenshots/3tier-diagram.png)


# 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) + Apache2 |
| Backend | Java 17 + Spring Boot + Maven |
| Database | Amazon RDS MySQL 8.0 |
| Cloud | AWS EC2, RDS, Security Groups |
| OS | Ubuntu 22.04 LTS |

---

# ✨ Features

- Add new students
- View all students in a table
- Delete students
- REST API integration
- Data stored in AWS RDS MySQL
- 3-Tier AWS deployment architecture
- Responsive frontend UI

---

# 🔒 Security Groups

| SG Name | Inbound Rules |
|---|---|
| student-frontend-sg | Port 80 (HTTP) from 0.0.0.0/0, Port 22 (SSH) from My IP |
| student-backend-sg | Port 8080 from 0.0.0.0/0, Port 22 (SSH) from My IP |
| student-rds-sg | Port 3306 from student-backend-sg only |

---

# 🚀 Deployment Steps

## Prerequisites

- AWS Account
- EC2 Key Pair
- GitHub Account
- Basic Linux Knowledge

---

## 1️⃣ Launch AWS Infrastructure

- Create 3 Security Groups
- Launch:
  - Frontend EC2 Instance
  - Backend EC2 Instance
- Create RDS MySQL Database
- Configure inbound rules correctly

---

## 2️⃣ Database Setup

```bash
mysql -h <RDS-ENDPOINT> -u admin -p
```

```sql
USE studentdb;
```

Run:

```text
Database/schema.sql
```

---

## 3️⃣ Backend Deployment

### Install Java & Maven

```bash
sudo apt update
sudo apt install openjdk-17-jdk maven -y
```

### Build Spring Boot Application

```bash
cd Backend
mvn clean package -DskipTests
```

### Run Backend Application

```bash
java -jar target/student-app.jar &
```

### Verify Backend

```bash
curl http://localhost:8080/api/students/health
```

---

## 4️⃣ Frontend Deployment

### Install Node.js & Apache2

```bash
sudo apt update -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### Build React Application

```bash
cd Frontend
npm install
npm run build
sudo apt install apache2 -y
```

### Deploy Frontend

```bash
sudo cp -r dist/* /var/www/html/
sudo systemctl restart apache2
sudo systemctl enable apache2
```

### Access Application

```text
http://<FRONTEND-EC2-PUBLIC-IP>
```

---

# 🌐 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/students | Get all students |
| POST | /api/students | Add new student |
| DELETE | /api/students/{id} | Delete student |
| GET | /api/students/health | Health check |

---

# 📸 Screenshots

# ☁️ Infrastructure

## EC2 Instances

![EC2 Instances](screenshots/01-ec2-instances.png)

## Frontend Security Group

![Frontend SG](screenshots/02-frontend-sg.png)

## Backend Security Group

![Backend SG](screenshots/03-backend-sg.png)

## RDS Security Group

![RDS SG](screenshots/04-rds-sg.png)

## RDS Available State

![RDS Available](screenshots/05-rds-available.png)

---

# 💻 Application

## Application Homepage

![Homepage](screenshots/06-app-homepage.png)

## Students List

![Students List](screenshots/07-app-students-list.png)

## API Health Check

![API Health](screenshots/08-api-health.png)

## API JSON Response

![API JSON](screenshots/09-api-json.png)

---

# ⚙️ Backend Service Running

## Spring Boot Service Status

![Backend Running](screenshots/10-backend-service-running.png)

---

# 📂 Project Structure

```text
student-management-aws-3tier/
│
├── Backend/
├── Frontend/
├── Database/
├── screenshots/
├── README.md
└── .gitignore
```

---

# 🔮 Future Improvements

- Dockerize frontend and backend
- Add Jenkins CI/CD pipeline
- Deploy using Kubernetes
- Add Terraform Infrastructure as Code
- Configure Nginx Reverse Proxy
- Enable HTTPS using AWS ACM

---

# 👤 Author

## Srikanth Sanjay Pawar

- LinkedIn: https://linkedin.com/in/srikanth-pawar
- GitHub: https://github.com/Heyysri
- Email: sreekanthsanjay5@gmail.com

---

# ⭐ Project Highlights

- AWS 3-Tier Architecture
- Production-style deployment
- React + Spring Boot integration
- AWS RDS database connectivity
- Linux server management
- REST API development
- Cloud infrastructure setup
- GitHub project hosting
