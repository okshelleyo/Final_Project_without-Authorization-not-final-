CREATE TABLE Visitors (
VisitorID INT IDENTITY (1,1) PRIMARY KEY,
VisitorEmail NVARCHAR (250),
VisitorPassword NVARCHAR (250)
);

CREATE TABLE TheLikes (
EntryID INT IDENTITY (1,1) PRIMARY KEY,
ObjectID INT,
VisitorID INT,
VisitedObject BIT NOT NULL,
Department NVARCHAR (200)
FOREIGN KEY (VisitorID) REFERENCES Visitors(VisitorID)
);

INSERT INTO Visitors (ObjectID)
VALUES
(437133, 