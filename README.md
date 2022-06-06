<h3 align="center">👋 Aló! I'm David Larena González</h3>

---
#### I'm a Backend Developer working in Valencia, Spain.

- 🏢 I'm currently working at **@Leadtech;**
- ⚙️ I use daily: `.java`, `.sql`, `.mvn`, `.aws`
- 🌍 I'm mostly active within the **Blockchain Community**
- 🌱 Learning all about **Solidity Development**
- 💬 Ping me about **DeFi**, **Blockchain**, **Investments**, **Ethereum**
- 📫 contactMe(): [linkedin.com/David-larena-gonzalez/](https://www.linkedin.com/in/david-larena-gonzalez/)

```ruby
contract HireMeContract {
        
      Profile memory davidLarenaGonzalez = Profile({
               name: "David Larena González",
               age: 24,
               location: "Valencia, Spain",
               hasExperience: true,
               isWillingToLearnAndImprove: true
            });
            
      uint constant salaryExpectations = ???;
    
      struct Profile {
          string name;
          uint age;
          string location;
          bool hasExperience;
          bool isWillingToLearnAndImprove;
      }
    
      struct Job {
          string company;
          string role;
          uint salary;
          string location;
          bool isRemote;
          bool isBlockchainRelated;
      }
    
    
      modifier meetJobOfferRequierements(Job memory _job){
          require(_job.isRemote);
          require(_job.isBlockchainRelated);
          require(_job.salary > salaryExpectations);
          _;
      }
      
      function sendJobOffer(Job memory _job) public payable meetJobOfferRequierements(_job) {
          contactMe(📫);
      }
    }
}
```
