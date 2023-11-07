
const errorB = document.querySelectorAll('b')
console.log(errorB)
const upgradesData = {
    // 6 Upgrades Kdr
    kdrArcher: [
      {
        name: "Salvage",
        imgFirst: "3QwwimV",
        subName: "(Cứu hộ) (1 Star)",
        describe:
          "Tháp Xạ thủ trả lại 90% giá trị khi bán. (Tỷ lệ hoàn vốn thông thường là 60%.)",
      },
      {
        name: "Eagle Eye",
        imgFirst: "45JWazK",
        subName: "(Mắt đại bàng) (1 Star)",
        describe: "Tăng phạm vi tấn công của Xạ thủ (10%).",
      },
      {
        name: "Piercing Shots",
        imgFirst: "3MdfvCC",
        subName: "(Phát bắn xuyên thấu) (2 Star)",
        describe:
          "Những phát bắn xuyên thấu sẽ bỏ qua một phần giáp vật lý của kẻ địch. (10%)",
      },
      {
        name: "Far Shots",
        imgFirst: "45Jf61F",
        subName: "(Phát bắn từ xa) (2 Star)",
        describe:
          "Tăng phạm vi tấn công của xạ thủ (thêm 10%, cộng dồn theo cấp số nhân cho tổng cộng 21%).",
      },
      {
        name: "Precision",
        imgFirst: "46UbsmU",
        subName: "(Độ chính xác) (3 Star)",
        describe:
          "Các cuộc tấn công của xạ thủ có cơ hội gây Damage gấp đôi. (10%)",
      },
    ],
    kqdBarracks: [
      {
        name: "Toughness Training",
        imgFirst: "3QvryxU",
        subName: "(Rèn luyện sức bền) (1 Star)",
        describe:
          "Doanh trại huấn luyện binh lính có nhiều sức khỏe hơn. (+10% máu)",
      },
      {
        name: "Better Armor",
        imgFirst: "3QtOKMV",
        subName: "(Giáp tốt hơn) (1 Star)",
        describe:
          "Doanh trại huấn luyện binh lính với áo giáp cải tiến. (+10% giáp, điểm phần trăm)",
      },
      {
        name: "Improved Deployment",
        imgFirst: "47l21x1",
        subName: "(Triển khai được cải thiện) (2 Stars)",
        describe:
          "Cải thiện phạm vi điểm tập hợp (20%) và giảm thời gian huấn luyện binh lính. (Thời gian hồi sinh giảm 3 giây đối với Holy Order và 2 giây đối với những người khác.)",
      },
      {
        name: "Endurance Training",
        imgFirst: "3QvryxU",
        subName: "(Rèn luyện sức bền) (2 Stars)",
        describe:
          "Doanh trại huấn luyện binh lính có nhiều sức khỏe hơn. (+10% máu, cộng dồn lên tổng cộng 20%)",
      },
      {
        name: "Spiked Armor",
        imgFirst: "3s5C7y5",
        subName: "(Giáp Gai) (3 Stars)",
        describe:
          "Khi bị tấn công, áo giáp có gai của người lính sẽ trả lại 10% Damage chuẩn cho kẻ tấn công. Giáp Gai cũng ảnh hưởng đến Quân tiếp viện và Anh hùng.",
      },
    ],
    kdrMagic: [
      {
        name: "Spell Reach",
        imgFirst: "3tE5zeW",
        subName: "(Phép thuật tiếp cận) (1 Star)",
        describe: "Tăng phạm vi tấn công của thuật sĩ (thêm 10%).",
      },
      {
        name: "Arcane Shatter",
        imgFirst: "476vJWl",
        subName: "(Bí mật nhà nghề) (1 Star)",
        describe:
          "Các đòn tấn công phép thuật sẽ phá hủy một lượng áo giáp vật lý của kẻ thù trong mỗi đòn đánh. (-3% giáp mỗi đòn đánh, không có tác dụng lên kẻ địch có khả năng miễn nhiễm Damage vật lý.)",
      },
      {
        name: "Hermetic Study",
        imgFirst: "4985T5Q",
        subName: "(Nghiên cứu kín) (2 Stars)",
        describe: "Chi phí và nâng cấp Tháp Mage giảm 10%.",
      },
      {
        name: "Empowered Magic",
        imgFirst: "470apBz",
        subName: "(Phép thuật được tăng cường) (2 Stars)",
        describe: "Tăng Damage tấn công của thuật sĩ (thêm 15%).",
      },
      {
        name: "Slow Curse",
        imgFirst: "3Fs6iCT",
        subName: "(Lời nguyền chậm) (3 Stars)",
        describe:
          "Đòn tấn công phép thuật làm chậm kẻ địch đi một nửa tốc độ của chúng trong giây lát. (0.5s)",
      },
    ],
    kdrArtillery: [
      {
        name: "Concentrated Fire",
        imgFirst: "46KnE9W",
        subName: "(Lửa tập trung) (1 Star)",
        describe: "Tăng Damage tấn công của pháo binh (thêm 10%).",
      },
      {
        name: "Range Finder",
        imgFirst: "3S8uiCj",
        subName: "(Công cụ tìm phạm vi) (1 Star)",
        describe: "Tăng phạm vi tấn công của pháo binh (10%).",
      },
      {
        name: "Field Logistic",
        imgFirst: "3SdjoeO",
        subName: "(Lĩnh vực hậu cần) (2 Star)",
        describe: "Chi phí và nâng cấp pháo binh giảm 10%.",
      },
      {
        name: "Industrialization",
        imgFirst: "46WQgMI",
        subName: "(Công nghiệp hóa) (3 Star)",
        describe: "Chi phí khả năng đặc biệt của pháo binh giảm 25%.",
      },
      {
        name: "Smart Targeting",
        imgFirst: "3QrM02A",
        subName: "(Nhắm mục tiêu thông minh) (3 Star)",
        describe:
          "Pháo binh không giảm Damage vùng và Damage xung quanh nữa. Điều này làm cho Damage của pháo binh luôn cao nhất trong toàn bộ phạm vi tác động.",
      },
    ],
    kdrRainofFire: [
      {
        name: "Blazing Skies",
        imgFirst: "3s38v4m",
        subName: "(Bầu trời rực sáng) (1 Star)",
        describe:
          "Thêm 2 thiên thạch và tăng Damage thiên thạch (từ 30-60 lên 50-80).",
      },
      {
        name: "Scorched Earth",
        imgFirst: "3MdbjTB",
        subName: "(Thiêu đốt Trái đất) (2 Stars)",
        describe:
          "Thiên thạch đốt cháy kẻ địch trên mặt đất trong 5 giây. (10-20 Damage mỗi giây, mỗi thiên thạch)",
      },
      {
        name: "The Fast &amp; Furious",
        imgFirst: "3FtdWN5",
        subName: "(Nhanh Quá Nguy Hiểm) (3 Stars)",
        describe:
          "Tăng Damage thiên thạch (lên 90-120), bán kính vụ nổ thêm 25% và giảm thời gian hồi chiêu đi 10 giây (từ 80 giây).",
      },
      {
        name: "Blazing Earth",
        imgFirst: "3Fsa4fk",
        subName: "(Trái đất rực sáng) (3 Stars)",
        describe:
          "Nhân đôi Damage và thời gian thiêu đốt của Scorched Earth, đồng thời giảm thời gian hồi chiêu đi 10 giây. (Damage thực sự tăng lên 20-30.)",
      },
      {
        name: "Cataclysm",
        imgFirst: "3Fv13lD",
        subName: "(Thảm họa) (3 Stars)",
        describe:
          "Tăng Damage thiên thạch (lên 150-180) và mưa thêm (5) thiên thạch tại các vị trí ngẫu nhiên trên khắp chiến trường.",
      },
    ],
    kdrReinforcements: [
      {
        name: "Well Fed",
        imgFirst: "45LhyF9",
        subName: "(Ăn uống tốt) (2 Stars)",
        describe:
          "Những người lính có thêm máu và gây thêm một chút Damage. (50 HP, 1-3 Damage)",
      },
      {
        name: "Conscripts",
        imgFirst: "3tKKEHk",
        subName: "(Lính nghĩa vụ) (3 Stars)",
        describe:
          "Những người lính nghĩa vụ có nhiều sức khỏe hơn và được trang bị tốt hơn. (70 HP, 10% Giáp, 2-4 damage)",
      },
      {
        name: "Warriors",
        imgFirst: "493aWET",
        subName: "(Chiến Binh) (3 Stars)",
        describe:
          "Các chiến binh thậm chí còn có nhiều sức khỏe hơn và được trang bị tuyệt vời. (90 HP, 20% giáp, 3-6 damage)",
      },
      {
        name: "Legionnaires",
        imgFirst: "493aXIX",
        subName: "(Quân đoàn) (3 Stars)",
        describe:
          "Legionnaires có nhiều sức khỏe nhất và mặc trang bị tốt nhất. (110 HP, 30% giáp, 6-10 damage)",
      },
      {
        name: "Spear Throw",
        imgFirst: "3McSksa",
        subName: "(Ném giáo) (4 Stars)",
        describe:
          "Cung cấp cho Legionnaires một cây giáo có thể nhắm mục tiêu vào kẻ thù trên mặt đất và đang bay. (110 HP, 30% giáp, 6-10 Damage, 24-40 Damage tầm xa)",
      },
    ],
    // 6 Upgrades Frontiers
    frontiersArcher: [
      {
        name: "Steady Hand",
        imgFirst: "408ubIW",
        subName: "(Bàn tay ổn định) (1 Star)",
        describe: "Tăng 10% phạm vi tấn công của xạ thủ.",
      },
      {
        name: "Lumbermill",
        imgFirst: "3Q7Dlkj",
        subName: "(Máy nghiền gỗ) (1 Star)",
        describe:
          "Giảm Chi phí cơ bản của tháp xạ thủ. (-10 vàng đối với tháp xạ thủ cấp 1-3).",
      },
      {
        name: "Focused Aim",
        imgFirst: "3Q74FPH",
        subName: "(Tập trung mục tiêu) (2 Stars)",
        describe: "Tăng 5% Damage tấn công của xạ thủ.",
      },
      {
        name: "Accuracy",
        imgFirst: "3QcBXwS",
        subName: "(Độ chính xác) (2 Stars)",
        describe:
          "Tăng thêm 5% phạm vi tấn công của xạ thủ và thêm 10% Damage.",
      },
      {
        name: "Twin Shot",
        imgFirst: "3s8YZN6",
        subName: "(Bắn đôi) (3 Stars)",
        describe: "Xạ thủ có 10% cơ hội bắn hai viên đạn cùng một lúc.",
      },
    ],
    frontiersBarracks: [
      {
        name: "Defensive Stance",
        imgFirst: "3sd9Plf",
        subName: "(Thế phòng thủ) (1 Star)",
        describe:
          "Doanh trại huấn luyện binh lính với áo giáp tốt hơn. (+10% giáp)",
      },
      {
        name: "Boot Camp",
        imgFirst: "3Q3gpCS",
        subName: "(Chương trình đào tạo) (1 Star)",
        describe:
          "Doanh trại huấn luyện những người lính kiên cường hơn. (+10% máu)",
      },
      {
        name: "Esprit De Corps",
        imgFirst: "46H6gD3",
        subName: "(Tinh thần đồng đội) (2 Stars)",
        describe:
          "Tăng phạm vi điểm tập hợp của doanh trại (+20%) và tốc độ hồi máu (+20% mỗi giây).",
      },
      {
        name: "Veteran Squad",
        imgFirst: "3QchOHv",
        subName: "(Biệt Đội Cựu Chiến Binh) (2 Stars)",
        describe:
          "Binh lính được huấn luyện nhanh hơn và có áo giáp được cải tiến. (-2 giây thời gian hồi sinh, +10% giáp, cộng dồn)",
      },
      {
        name: "Courage",
        imgFirst: "3QaSstd",
        subName: "(Lòng Dũng Cảm) (3 Stars)",
        describe:
          "Trong khi chiến đấu, binh lính, lính đánh thuê và quân tiếp viện phục hồi 1% HP mỗi giây. (cũng hoạt động ngoài chiến đấu)",
      },
    ],
    frontiersMagic: [
      {
        name: "Rune of Power",
        imgFirst: "406brtN",
        subName: "(Sức mạnh cổ xưa) (1 Star)",
        describe: "Tăng phạm vi tấn công của pháp sư (10%).",
      },
      {
        name: "Spell Penetration",
        imgFirst: "46YZWqb",
        subName: "(Tia phép xuyên Thấu) (1 Star)",
        describe: "Các tia phép của pháp sư có cơ hội bỏ qua kháng phép. (10%)",
      },
      {
        name: "Eldritch Power",
        imgFirst: "3s2U8gs",
        subName: "(Sức mạnh Eldritch) (2 Stars)",
        describe: "Tăng Damage tấn công của pháp sư (10%).",
      },
      {
        name: "Academy",
        imgFirst: "3FzlLkg",
        subName: "(Học viện pháp sư) (2 Stars)",
        describe: "Giảm 10% chi phí kỹ năng đặc biệt của pháp sư.",
      },
      {
        name: "Brilliance",
        imgFirst: "3Fumt2n",
        subName: "(Sáng chói) (3 Stars)",
        describe:
          "Đối với mỗi tháp pháp sư được xây dựng, mỗi tháp pháp sư sẽ nhận được phần thưởng Damage.",
        table:
          "Số lượng tháp pháp sư\tDamage tăng thêm\n1\t0%\n2\t~5%\n3\t~10%\n4\t~14%\n5\t~18%\n6\t~21%\n7\t~24%\n8\t~27%\n9+\t~30%",
      },
    ],
    frontiersArtillery: [
      {
        name: "Smoothbore",
        imgFirst: "496gOgn",
        subName: "(1 Star)",
        describe: "Tăng phạm vi tấn công của pháo binh (10%).",
      },
      {
        name: "Alchemical Powder",
        imgFirst: "3SciajH",
        subName: "(Bột giả kim) (1 Star)",
        describe:
          "Pháo binh có 10% cơ hội gây Damage tối đa mà không bị giảm văng.",
      },
      {
        name: "Improved Ordnance",
        imgFirst: "3tMmqMT",
        subName: "(Vũ khí cải tiến) (2 Stars)",
        describe: "Tăng Damage tấn công của pháo binh (thêm 10%).",
      },
      {
        name: "Gnomish Tinkering",
        imgFirst: "46FndxF",
        subName: "(2 Stars)",
        describe:
          "Giảm thời gian nạp lại khả năng đặc biệt của pháo binh. (trong 3 giây).",
      },
      {
        name: "Shock and Awe",
        imgFirst: "46N2nwj",
        subName: "(Sốc và kinh ngạc) (3 Stars)",
        describe:
          "Tháp pháo có 20% cơ hội làm choáng mục tiêu trong 2 giây sau mỗi đòn tấn công.",
      },
    ],
    frontiersRainofFire: [
      {
        name: "Burning Skies",
        imgFirst: "46Gws0E",
        subName: "(Bầu trời rực cháy) (2 Stars)",
        describe:
          "Tăng Damage thiên thạch và giảm thời gian hồi chiêu thêm 5 giây.",
      },
      {
        name: "Scorched Earth",
        imgFirst: "493peW2",
        subName: "(Thiêu đốt Trái đất) (2 Stars)",
        describe:
          "Thiên thạch đốt cháy mặt đất trong 5 giây, đốt cháy kẻ địch đi qua.",
      },
      {
        name: "Hellfire",
        imgFirst: "3QvDNum",
        subName: "(Hỏa ngục) (3 Stars)",
        describe:
          "Thêm 2 thiên thạch bổ sung và giảm thời gian hồi chiêu đi 5 giây.",
      },
      {
        name: "Conflagration",
        imgFirst: "474cFrw",
        subName: "(Hỏa Hoạn) (3 Stars)",
        describe:
          "Tăng Damage của thiên thạch và bán kính vụ nổ (+25%) đồng thời tăng gấp đôi hiệu ứng thiêu đốt của trái đất.",
      },
      {
        name: "Cataclysm",
        imgFirst: "46FqjSj",
        subName: "(Thảm họa) (3 Stars)",
        describe:
          "Tăng Damage thiên thạch và mưa thêm (5) thiên thạch tại các vị trí ngẫu nhiên trên khắp chiến trường.",
      },
    ],
    frontiersReinforcements: [
      {
        name: "Trained Volunteers",
        imgFirst: "3Q5sd7L",
        subName: "(Tình nguyện viên được đào tạo) (2 Stars)",
        describe:
          "Tình nguyện viên được đào tạo có thêm sức khỏe và gây thêm một chút Damage. (50 HP, 1-3 Damage)",
      },
      {
        name: "Men-at-Arms",
        imgFirst: "3Mg5Xqt",
        subName: "(Người cầm súng) (3 Stars)",
        describe:
          "Men-at-Arms có nhiều sức khỏe hơn và mặc áo giáp tốt. (70 HP, 10% giáp, 2-4 Damage)",
      },
      {
        name: "Champion",
        imgFirst: "47leHnB",
        subName: "(Vô Địch) (3 Stars)",
        describe:
          "Các nhà vô địch thậm chí còn có nhiều máu hơn và sử dụng vũ khí tuyệt vời. (90 HP, 20% giáp, 3-6 Damage)",
      },
      {
        name: "Sworn Blades",
        imgFirst: "3SjaADU",
        subName: "(Lưỡi thề) (3 Stars)",
        describe:
          "Sworn Blades có nhiều máu nhất và sử dụng vũ khí kép. (110 HP, 30% giáp, 6-10 Damage)",
      },
      {
        name: "Recurve Bow",
        imgFirst: "3Q1whG0",
        subName: "(Cung Recurve) (4 Stars)",
        describe:
          "Cung cấp cho quân tiếp viện một loại vũ khí tầm xa có thể nhắm mục tiêu vào kẻ thù trên mặt đất và trên không. (110 HP, 30% giáp, 6-10 Damage, 16-30 Damage tầm xa)",
      },
    ],
    // 6 Upgrades Origins
    originArcher: [
      {
        name: "Master Shooter",
        imgFirst: "45Mc2BQ",
        subName: "(Bậc thầy bắn súng) (1 star)",
        describe: "Tăng Damage tấn công của Archer (thêm 5%).",
      },
      {
        name: "Treesinged Bow",
        imgFirst: "3Mf9J3D",
        subName: "(Cung cây) (1 star)",
        describe: "Tăng phạm vi tấn công của Archer (10%).",
      },
      {
        name: "Obsidian Heads",
        imgFirst: "3MfDp0t",
        subName: "(Đầu hắc diện thạch) (2 star)",
        describe:
          "Cung thủ gây Damage tối đa lên các mục tiêu không có áo giáp.",
      },
      {
        name: "Elven Training",
        imgFirst: "3s3isyU",
        subName: "(Huấn luyện yêu tinh) (2 star)",
        describe:
          "Cải thiện tất cả các khả năng đặc biệt của Archer (10% hiệu ứng/cơ hội của khả năng).",
      },
      {
        name: "Bloodletting Shot",
        imgFirst: "45IWHCf",
        subName: "(Cú bắn đổ máu) (3 star)",
        describe:
          "Các đòn tấn công của cung thủ có 15% khả năng gây chảy máu nặng trong 3 giây. Điều này gây ra 23 Damage, trong đó mỗi tích tắc gây 10% Damage của mũi tên (sau giáp), làm tròn lên, thành Damage chuẩn. Chảy máu có thể xếp chồng lên nhau và với các dạng chảy máu khác.",
        table: `Tòa tháp	Damage đổ máu tối đa
        Hunter Arbor	23
        Watcher Arbor	23
        Sentinel Arbor	46
        <b>Arcane Archers</b>	46
        <b>Golden Longbows</b>	Bắn tầm xa: 161<br/>Bắn tầm xa kết hợp "chí mạng": 299 <br/>Bắn tầm ngắn: 69 <br/>Bắn tầm ngắn kết hợp "chí mạng": 115`,
      },
    ],

    originBarracks: [
      {
        name: "Elven Fencing",
        imgFirst: "46JlDL1",
        subName: "(Đấu kiếm yêu tinh) (1 star)",
        describe:
          "Giảm Chi phí doanh trại cơ bản. (-10% cho Doanh trại cấp 1-3)",
      },
      {
        name: "Expert Tactician ",
        imgFirst: "407gPNg",
        subName: "(Chuyên gia chiến thuật) (1 star)",
        describe: "Tăng phạm vi điểm tập hợp của doanh trại (10%).",
      },
      {
        name: " Enchanted Armor",
        imgFirst: "46Hjv6J",
        subName: "(Áo giáp mê hoặc) (2 star)",
        describe:
          "Doanh trại trang bị cho binh lính áo giáp cải tiến. (+10%, điểm phần trăm).",
      },
      {
        name: "Moon Forged Blades",
        imgFirst: "497h92p",
        subName: "(Lưỡi rèn mặt trăng) (2 star)",
        describe:
          "Các đòn tấn công của lính gây thêm 15% Damage phép (làm tròn).",
        table: `Tòa tháp	Damage mà không cần nâng cấp (có nâng cấp)
        Doanh trại phòng thủ	1-4 (2-5)
        Doanh trại cai ngục	3-7 (4-9)
        Doanh trại Kiểm lâm	8-12 (10-14)
        <b>Bladesinger Hall</b>	10-14 (12-17)
        <b>Forest Keepers</b>	24-36 (28-42)`,
      },
      {
        name: "Blessing of Elynie",
        imgFirst: "3tKZSfs",
        subName: "(Phước lành của Elynie) (3 star)",
        describe:
          "Lính có 10% khả năng lừa chết khi gây Damage chí mạng. (Những người lính hồi sinh với đầy đủ sức khỏe khi tiến hành.)",
      },
    ],

    originMagic: [
      {
        name: "Crystal Focus",
        imgFirst: "496qKqb",
        subName: "(Tinh thể tập trung) (1 star)",
        describe: "Tăng phạm vi tấn công của Pháp sư (thêm 5%).",
      },
      {
        name: "Empowered Magic",
        imgFirst: "497heDf",
        subName: "(Phép thuật cường hóa) (1 star)",
        describe: "Tăng Damage tấn công của Pháp sư (15%).",
      },
      {
        name: "Crystal Gazing",
        imgFirst: "45RxiXe",
        subName: "(Ngắm pha lê) (2 stars)",
        describe:
          "Tăng phạm vi tấn công của Pháp sư (thêm 5%, cộng dồn theo cấp số nhân).",
      },
      {
        name: "Unstable Magic",
        imgFirst: "3QuMuVx",
        subName: "(Phép thuật không ổn định) (2 stars)",
        describe:
          'Các đòn tấn công của pháp sư có một cơ hội nhỏ để gây Damage gấp ba lần. (Mỗi tia có 5% cơ hội và nó được hiển thị dưới dạng "VỤ NỔ!".)',
      },
      {
        name: "Alter Reality",
        imgFirst: "493rXyL",
        subName: "(Thực tế thay đổi) (3 stars)",
        describe: `Các cuộc tấn công của pháp sư có cơ hội dịch chuyển kẻ thù 20 nút trở lại con đường. <br/>
        <b>Wild Magus</b>: 1%, <b>High Elven Mage</b>: 3%, những người khác: 10%, chỉ có thể kích hoạt tối đa ba lần cho mỗi kẻ địch.`,
      },
    ],

    originDruid: [
      {
        name: "Hardened Boulders",
        imgFirst: "3QuETX4",
        subName: "(Tảng Đá Cứng) (1 star)",
        describe: "Tăng Damage tấn công của Druid (10%).",
      },
      {
        name: "Sharp Splinters",
        imgFirst: "46OmGtu",
        subName: "(Mảnh vụn sắc nhọn) (1 star)",
        describe: "Tăng diện tích nổ tảng đá (10%).",
      },
      {
        name: "Earth Mastery",
        imgFirst: "3QtzhfL",
        subName: "(Làm chủ Trái đất) (2 stars)",
        describe: "Tăng phạm vi tấn công của Druid (10%).",
      },
      {
        name: "Heavy Load",
        imgFirst: "474tVNm",
        subName: "(Tải nặng) (3 stars)",
        describe:
          "Vụ nổ của tảng đá bỏ qua áo giáp vật lý. (loại Damage được thay đổi thành True damage)",
      },
      {
        name: "Shocking Impact",
        imgFirst: "46ZenKT",
        subName: "(Tác động gây sốc) (3 stars)",
        describe:
          "Vụ nổ của tảng đá làm chậm kẻ địch trong thời gian ngắn. (tăng 50% trong 0,5 giây)",
      },
    ],

    originThunderbolt: [
      {
        name: "Thunderbolt",
        imgFirst: "46Zet5d",
        subName: "(Sấm sét) (2 stars)",
        describe: "Thêm 3 tia sét bổ sung.",
      },
      {
        name: "Roaring Gale",
        imgFirst: "475uWVF",
        subName: "(Cơn Gió Gầm) (2 stars)",
        describe:
          "Tăng Damage của tia sét và giảm thời gian hồi chiêu thêm 10 giây.",
      },
      {
        name: "Thunderstorm",
        imgFirst: "407RnXO",
        subName: "(Sấm sét) (3 stars)",
        describe: "Thêm 2 tia sét, đồng thời gió lớn làm chậm toàn bộ kẻ địch.",
      },
      {
        name: "Monsoon",
        imgFirst: "46UvKN6",
        subName: "(Gió mùa) (3 stars)",
        describe:
          "Tăng Damage của sấm sét và tăng gấp đôi hiệu ứng làm chậm gió.",
      },
      {
        name: "Furious Tempest",
        imgFirst: "493lBzl",
        subName: "(Bão tố giận dữ) (3 stars)",
        describe:
          "Tăng Damage của tia sét và ném thêm tia sét vào kẻ thù ngẫu nhiên.",
      },
    ],

    originReinforcements: [
      {
        name: "Skilled Defenders",
        imgFirst: "474urLi",
        subName: "(Hậu vệ có kỹ năng) (2 stars)",
        describe:
          "Những người phòng thủ có kỹ năng có nhiều sức khỏe hơn và trang bị tốt hơn. (60 HP, 3-5 Damage, 20% giáp)",
      },
      {
        name: "Elven Stars",
        imgFirst: "474pBOq",
        subName: "(Sao Yêu Tinh) (3 stars)",
        describe:
          "Cung cấp cho quân tiếp viện một loại vũ khí tầm xa có thể nhắm mục tiêu vào kẻ thù trên mặt đất và trên không. (60 HP, 20% giáp, 3-5 Damage, 7-10 Damage tầm xa)",
      },
      {
        name: "Green Wardens",
        imgFirst: "46JONd0",
        subName: "(Người bảo vệ xanh) (3 stars)",
        describe:
          "Green Wardens có nhiều sức khỏe hơn, áo giáp tốt hơn và vũ khí cải tiến. (100 HP, 35% giáp, 5-10 Damage, 10-20 Damage tầm xa)",
      },
      {
        name: "Rapid Response",
        imgFirst: "3Mg7zAG",
        subName: "(Phản hồi nhanh) (3 stars)",
        describe:
          "Giảm thời gian hồi chiêu của quân tiếp viện đi 5 giây. (Từ 15 giây về 10 giây.)",
      },
      {
        name: "Moon Sentinels",
        imgFirst: "4701HU7",
        subName: "(Lính gác mặt trăng) (4 stars)",
        describe:
          "Lính canh mặt trăng là những nữ thợ săn yêu tinh ưu tú, cưỡi những con báo khổng lồ. (150 HP, 50% giáp, 10-15 Damage, 20-30 Damage tầm xa)",
      },
    ],
    // 4 Upgrades Vengeance
    vengeanceTowers: [
      {
        name: "BLITZ TACTICS",
        imgFirst: "494nQ5u",
        subName: "(Chiến thuật Blitz) (1 linh hồn)",
        describe: "Tăng vàng thưởng khi gọi đợt đầu. (80% vàng bổ sung)",
      },
      {
        name: "WAR RATIONS",
        imgFirst: "474nRo4",
        subName: "(Chiến tranh) (1 linh hồn)",
        describe:
          "Khi no bụng, các đơn vị Doanh trại được cải thiện sức khỏe. (Thêm 30% HP)",
      },
      {
        name: "GXR-1 TARGETING SYSTEM",
        imgFirst: "499Bdl1",
        subName: "(Hệ thống mục tiêu) (2 linh hồn)",
        describe:
          "Được cải tiến với công nghệ Goblin, Tháp Bắn cung có thêm tầm bắn. (phạm vi bổ sung 5%)",
      },
      {
        name: "BIGGER BOMBS",
        imgFirst: "474nTwc",
        subName: "(Bom lớn hơn) (1 linh hồn)",
        describe:
          "Được kết hợp với thuật giả kim mạnh mẽ, các vụ nổ giờ đây có phạm vi hiệu ứng lớn hơn. (Thêm 20% diện tích hiệu ứng)",
      },
      {
        name: "RUNES OF POWER",
        imgFirst: "3tCMZnu",
        subName: "(2 linh hồn)",
        describe:
          "Ba tháp pháp sư <b>Infernal Mage</b>, <b>Specters Mausoleum</b> và <b>Deep Devil's Reef</b> có một chút khả năng gây Damage gấp đôi trong mỗi đòn tấn công. (10% cơ hội gây Damage gấp đôi)",
      },
      {
        name: "GUILD OF MERCHANTS",
        imgFirst: "40fKiEQ",
        subName: "(Hội nghị thương nhân) (2 linh hồn)",
        describe:
          "Chi phí cho các kỹ năng đặc biệt của tháp hiện đã giảm. (giảm 15% chi phí)",
      },
      {
        name: "MASTER ARCHITECTS",
        imgFirst: "46Fru4b",
        subName: "(Kiến trúc chuyên gia) (2 linh hồn)",
        describe:
          "Tất cả các tòa tháp đều nhận thêm Damage. (Thêm 10% Damage tấn công cơ bản)",
      },
      {
        name: "DEATHRAY COILS",
        imgFirst: "46KApBm",
        subName: "(Cuộn Deathray) (4 linh hồn)",
        describe:
          "Thay thế cờ trên mỗi lối ra bằng cuộn dây Tesla chết người có tác dụng hạ gục kẻ thù đang lao tới. Những cuộn dây này có thể hạ gục kẻ thù cứ sau 180 giây với 150-300 Damage chuẩn.",
      },
    ],
    vengeanceHeroes: [
      {
        name: "BACK TO BATTLE",
        imgFirst: "46N6Qiz",
        subName: "(Trở lại trận chiến) (1 linh hồn)",
        describe: "Giảm thời gian hồi sinh của Tướng. (Giảm 10% hồi sinh)",
      },
      {
        name: "SPECIAL TRAINING",
        imgFirst: "46ENH2r",
        subName: "(Đào tạo đặc biệt) (1 linh hồn)",
        describe:
          "Nhờ bí mật và cường độ luyện tập cao, các anh hùng sẽ lên cấp nhanh hơn. (tăng thêm 25% XP)",
      },
      {
        name: "ONE MAN ARMY",
        imgFirst: "3Q1wU2k",
        subName: "(Một người lính) (2 linh hồn)",
        describe:
          "Tất cả các anh hùng đều cải thiện Damage tấn công cơ bản của họ. (thêm 15% Damage)",
      },
      {
        name: "ULTIMATE POWER",
        imgFirst: "40anMgp",
        subName: "(Sức mạnh tuyệt vời) (1 linh hồn)",
        describe:
          "Tất cả các kỹ năng tối thượng của anh hùng giờ đây đã giảm thời gian hồi chiêu. (Giảm 20% CD)",
      },
      {
        name: "IRON WILL",
        imgFirst: "3S7BIG7",
        subName: "(2 linh hồn)",
        describe:
          "Tất cả các anh hùng đều cải thiện sức khỏe tối đa của họ. (tăng 20% HP)",
      },
      {
        name: "SHIELD OF PROTECTION",
        imgFirst: "3Q82GL8",
        subName: "(Lá chắn bảo vệ) (2 linh hồn)",
        describe:
          "Mỗi đòn tấn công cơ bản gây ra cho anh hùng có một cơ hội nhỏ không gây Damage. (10% cơ hội kích hoạt)",
      },
      {
        name: "SECOND WIND",
        imgFirst: "406SJ52",
        subName: "(Gió thứ 2) (4 linh hồn)",
        describe:
          "Các anh hùng bây giờ có một cơ hội nhỏ để hồi sinh ngay lập tức. (10% cơ hội kích hoạt)",
      },
    ],
    vengeanceDemonGoonies: [
      {
        name: "INFERNAL COMBUSTION",
        imgFirst: "3QcLcNA",
        subName: "(Đốt cháy địa ngục) (1 linh hồn)",
        describe:
          "Sau khi chết, Goonies phát nổ gây 20 Damage vật lý trong phạm vi 90.",
      },
      {
        name: "TRAINED GOONIES",
        imgFirst: "3FBf2Gx",
        subName: "(Goonies được đào tạo) (2 linh hồn)",
        describe:
          "Được huấn luyện tốt hơn để chiến đấu, Goonies giờ đây đã được cải thiện về sức khỏe và Damage.",
      },
      {
        name: "DEMON GUARDS",
        imgFirst: "3Mg0Si2",
        subName: "(Vệ binh quỷ) (3 linh hồn)",
        describe:
          "Goonies hiện là Vệ binh quỷ! Chúng có khả năng chịu được lượng Damage khổng lồ. Loại trừ lẫn nhau với Hellion Tridents. (Đốt cháy địa ngục: 10 Damage vật lý trong phạm vi 90)",
      },
      {
        name: "INFERNAL NOVA",
        imgFirst: "3Md1sNs",
        subName: "(2 linh hồn)",
        describe:
          "Vệ binh quỷ giờ sẽ chết với một vụ nổ lớn hơn. Gây 40 Damage vật lý trong phạm vi 120.",
      },
      {
        name: "HELLION TRIDENTS",
        imgFirst: "3FuZu7i",
        subName: "(3 linh hồn)",
        describe:
          "Goonies giờ là Trident Hellon! Chúng là những con quỷ có thể tấn công kẻ thù bằng một đòn tấn công tầm xa. Loại trừ lẫn nhau với Vệ binh quỷ. (Đốt cháy địa ngục: 20 Damage vật lý trong phạm vi 90)",
      },
      {
        name: "FLAMING TRIDENTS",
        imgFirst: "3s4ibM5",
        subName: "(Đinh ba rực lửa) (2 linh hồn)",
        describe:
          "Đinh ba Hellion giờ đây sẽ ném những chiếc đinh ba đang cháy khiến kẻ địch bị đốt cháy khi va chạm trong một khoảng thời gian ngắn. (Damage đốt cháy: 10 Damage vật lý trong 2 giây)",
      },
      {
        name: "PIT LORD",
        imgFirst: "3MdMBSQ",
        subName: "(6 linh hồn)",
        describe:
          "Khi quân tiếp viện được gọi đến chiến trường, giờ đây có 30% cơ hội triệu tập Pit Lord cùng với họ. (Đốt cháy địa ngục: 50 Damage nổ trong phạm vi 90)",
      },
    ],
    vengeanceSoulImpact: [
      {
        name: "EXTRA IMPACTS",
        imgFirst: "45KJn0e",
        subName: "(2 linh hồn)",
        describe:
          "Khi sử dụng phép thuật, sẽ thêm một tác động bổ sung gần nơi bị trúng đòn đầu tiên.",
      },
      {
        name: "SOUL SHOCKWAVE",
        imgFirst: "3s6zOLm",
        subName: "(1 linh hồn)",
        describe:
          "Tác động giờ sẽ làm choáng kẻ địch bị ảnh hưởng trong 0,4 giây.",
      },
      {
        name: "CALL OF THE DAMNED",
        imgFirst: "3Qttirj",
        subName: "(3 linh hồn)",
        describe:
          "Sau khi va chạm, mỗi bóng phóng ra 2 bóng ma đuổi theo và gây 7-22 Damage cho kẻ địch.",
      },
      {
        name: "EXTRA SPECTRES",
        imgFirst: "3QuFXtZ",
        subName: "(2 linh hồn)",
        describe:
          "Tác động linh hồn giờ sẽ giải phóng tối đa 4 bóng ma khi chúng chạm vào.",
      },
      {
        name: "FEAR OF THE DAMNED",
        imgFirst: "3s3afe6",
        subName: "(1 linh hồn)",
        describe:
          "Kẻ địch bị bóng ma tấn công sẽ di chuyển với tốc độ 50% tốc độ của chúng trong 2 giây.",
      },
      {
        name: "FEAST OF THE DAMNED",
        imgFirst: "46Gyb68",
        subName: "(1 linh hồn)",
        describe:
          "Mỗi kẻ địch bị giết bởi phép thuật này sẽ giảm thời gian hồi chiêu cho lần thi triển tiếp theo.",
      },
      {
        name: "SOUL ECHOES",
        imgFirst: "45DiYRS",
        subName: "(Tiếng vọng linh hồn) (3 linh hồn)",
        describe:
          "Sau khi tác động kết thúc, có 25% khả năng tác động lại vào cùng một vị trí.",
      },
      {
        name: "TORNADO OF SOULS",
        imgFirst: "3S9OUdu",
        subName: "(5 linh hồn)",
        describe:
          "Khi sử dụng phép thuật, 2 tác động bổ sung sẽ rơi xuống khắp chiến trường.",
      },
    ],
  };
console.log(upgradesData)
