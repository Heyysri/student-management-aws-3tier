cat > README.md << 'EOF'
# 🎓 Student Management App — AWS 3-Tier Architecture

A full-stack Student Management System deployed on AWS using a 3-tier architecture.

## 🏗️ Architecture

![Architecture](architecture/3tier-diagram.png)
Internet
↓
EC2 (Frontend — React + Apache2)   [Public Subnet]
↓
EC2 (Backend — Java Spring Boot)   [Public Subnet]
↓
RDS MySQL (studentdb)              [Private Subnet]


## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) + Apache2 |
| Backend | Java 17 + Spring Boot + Maven |
| Database | Amazon RDS MySQL 8.0 |
| Cloud | AWS EC2, RDS, Security Groups, VPC |
| OS | Ubuntu 22.04 LTS |

## ✨ Features

- Add new students (Name, Email, Course, Branch, Mobile, Percentage)
- View all students in a table
- Delete students
- Data persists in RDS MySQL (survives EC2 restarts)

## 🔒 Security Groups

| SG Name | Inbound Rules |
|---|---|
| student-frontend-sg | Port 80 (HTTP) from 0.0.0.0/0, Port 22 from My IP |
| student-backend-sg | Port 8080 from 0.0.0.0/0, Port 22 from My IP |
| student-rds-sg | Port 3306 from student-backend-sg only |

## 🚀 Deployment Steps

### Prerequisites
- AWS Account
- EC2 Key Pair
- Basic knowledge of Linux commands

### 1. Launch AWS Infrastructure
- Create 3 Security Groups as above
- Launch 2 EC2 instances (Ubuntu 22.04, t2.micro)
- Create RDS MySQL (db.t3.micro, Free tier)

### 2. Database Setup
```bash
mysql -h <RDS-ENDPOINT> -u admin -p
USE studentdb;
# Run Database/schema.sql
```

### 3. Backend Deployment
```bash
sudo apt install openjdk-17-jdk maven -y
mvn clean package -DskipTests
java -jar target/student-app.jar
```

### 4. Frontend Deployment
```bash
sudo apt install nodejs apache2 -y
npm install && npm run build
sudo cp -r dist/* /var/www/html/
```

## 📸 Screenshots

### Infrastructure
![EC2 Instances](screenshots/01-ec2-instances.png)
![RDS Instance](screenshots/05-rds-available.png)

### Application
![App UI](screenshots/07-app-students-list.png)
![API Response](screenshots/09-api-json.png)

## 👤 Author
**Srikanth Sanjay Pawar**
- LinkedIn: [linkedin.com/in/srikanth-pawar](https://linkedin.com/in/srikanth-pawar)
- Email: sreekanthsanjay5@gmail.com
EOF