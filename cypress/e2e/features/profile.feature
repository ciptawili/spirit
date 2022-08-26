@profile
Feature: Profile Feature

    Scenario: Edit Profile With 
        Given Open SehatQ login page
        When User login with email 'jiungkuy@gmail.com' and password 'Coba@123'
        And Open SehatQ profile page
        And User edit profile with valid data
        Then Success edit profile

    Scenario Outline: Edit Profile Invalid Data With <case>
        Given Open SehatQ login page
        When User login with email 'jiungkuy@gmail.com' and password 'Coba@123'
        And Open SehatQ profile page
        And User edit profile with valid data name '<name>', height '<height>', weight '<weight>', phone '<phone>', address '<address>' 
        Then Show message error "<message>"
        Examples:
            | case                  | name          | height | weight | phone         | address   |   message     |
            | Invalid Name          | 123           | 180    | 90     | 08782521297   | Jalanin   |   Nama harus diisi dengan huruf.         |
            | Invalid Height        | Automation    | 18o    | 90     | 08782521297   | Jalanin   |  Tinggi Badan harus diisi dengan benar  |
            | Invalid Weight        | Automation    | 180    | 9o     | 08782521297   | Jalanin   |   Berat Badan harus diisi dengan benar   |
            | Minimal Char Address  | Automation    | 180    | 90     | 08782521297   | Ja        |   Kolom Alamat minimal 3                 |
            | Invalid Phone Number  | Automation    | 180    | 90     | jjs           | Jalanin   |   No. Telp harus diisi dengan benar   |                                                

