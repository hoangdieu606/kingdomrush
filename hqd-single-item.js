renderData();
function renderData() {
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
          "Các cuộc tấn công của xạ thủ có cơ hội gây sát thương gấp đôi. (10%)",
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
          "Khi bị tấn công, áo giáp có gai của người lính sẽ trả lại 10% sát thương chuẩn cho kẻ tấn công. Giáp Gai cũng ảnh hưởng đến Quân tiếp viện và Anh hùng.",
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
          "Các đòn tấn công phép thuật sẽ phá hủy một lượng áo giáp vật lý của kẻ thù trong mỗi đòn đánh. (-3% giáp mỗi đòn đánh, không có tác dụng lên kẻ địch có khả năng miễn nhiễm sát thương vật lý.)",
      },
      {
        name: "Hermetic Study",
        imgFirst: "4985T5Q",
        subName: "(Nghiên cứu kín) (2 Stars)",
        describe: "Chi phí xây dựng và nâng cấp Tháp Mage giảm 10%.",
      },
      {
        name: "Empowered Magic",
        imgFirst: "470apBz",
        subName: "(Phép thuật được tăng cường) (2 Stars)",
        describe: "Tăng sát thương tấn công của thuật sĩ (thêm 15%).",
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
        describe: "Tăng sát thương tấn công của pháo binh (thêm 10%).",
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
        describe: "Chi phí xây dựng và nâng cấp pháo binh giảm 10%.",
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
          "Pháo binh không giảm sát thương vùng và sát thương xung quanh nữa. Điều này làm cho sát thương của pháo binh luôn cao nhất trong toàn bộ phạm vi tác động.",
      },
    ],
    kdrRainofFire: [
      {
        name: "Blazing Skies",
        imgFirst: "3s38v4m",
        subName: "(Bầu trời rực sáng) (1 Star)",
        describe:
          "Thêm 2 thiên thạch và tăng sát thương thiên thạch (từ 30-60 lên 50-80).",
      },
      {
        name: "Scorched Earth",
        imgFirst: "3MdbjTB",
        subName: "(Thiêu đốt Trái đất) (2 Stars)",
        describe:
          "Thiên thạch đốt cháy kẻ địch trên mặt đất trong 5 giây. (10-20 sát thương mỗi giây, mỗi thiên thạch)",
      },
      {
        name: "The Fast & Furious",
        imgFirst: "3FtdWN5",
        subName: "(Nhanh Quá Nguy Hiểm) (3 Stars)",
        describe:
          "Tăng sát thương thiên thạch (lên 90-120), bán kính vụ nổ thêm 25% và giảm thời gian hồi chiêu đi 10 giây (từ 80 giây).",
      },
      {
        name: "Blazing Earth",
        imgFirst: "3Fsa4fk",
        subName: "(Trái đất rực sáng) (3 Stars)",
        describe:
          "Nhân đôi sát thương và thời gian thiêu đốt của Scorched Earth, đồng thời giảm thời gian hồi chiêu đi 10 giây. (Sát thương thực sự tăng lên 20-30.)",
      },
      {
        name: "Cataclysm",
        imgFirst: "3Fv13lD",
        subName: "(Thảm họa) (3 Stars)",
        describe:
          "Tăng sát thương thiên thạch (lên 150-180) và mưa thêm (5) thiên thạch tại các vị trí ngẫu nhiên trên khắp chiến trường.",
      },
    ],
    kdrReinforcements: [
      {
        name: "Well Fed",
        imgFirst: "45LhyF9",
        subName: "(Ăn uống tốt) (2 Stars)",
        describe:
          "Những người lính có thêm máu và gây thêm một chút sát thương. (50 HP, 1-3 sát thương)",
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
          "Cung cấp cho Legionnaires một cây giáo có thể nhắm mục tiêu vào kẻ thù trên mặt đất và đang bay. (110 HP, 30% giáp, 6-10 sát thương, 24-40 sát thương tầm xa)",
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
          "Giảm chi phí xây dựng cơ bản của tháp xạ thủ. (-10 vàng đối với tháp xạ thủ cấp 1-3).",
      },
      {
        name: "Focused Aim",
        imgFirst: "3Q74FPH",
        subName: "(Tập trung mục tiêu) (2 Stars)",
        describe: "Tăng 5% sát thương tấn công của xạ thủ.",
      },
      {
        name: "Accuracy",
        imgFirst: "3QcBXwS",
        subName: "(Độ chính xác) (2 Stars)",
        describe:
          "Tăng thêm 5% phạm vi tấn công của xạ thủ và thêm 10% sát thương.",
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
        describe: "Tăng sát thương tấn công của pháp sư (10%).",
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
          "Đối với mỗi tháp pháp sư được xây dựng, mỗi tháp pháp sư sẽ nhận được phần thưởng sát thương.",
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
          "Pháo binh có 10% cơ hội gây sát thương tối đa mà không bị giảm văng.",
      },
      {
        name: "Improved Ordnance",
        imgFirst: "3tMmqMT",
        subName: "(Vũ khí cải tiến) (2 Stars)",
        describe: "Tăng sát thương tấn công của pháo binh (thêm 10%).",
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
          "Tăng sát thương thiên thạch và giảm thời gian hồi chiêu thêm 5 giây.",
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
          "Tăng sát thương của thiên thạch và bán kính vụ nổ (+25%) đồng thời tăng gấp đôi hiệu ứng thiêu đốt của trái đất.",
      },
      {
        name: "Cataclysm",
        imgFirst: "46FqjSj",
        subName: "(Thảm họa) (3 Stars)",
        describe:
          "Tăng sát thương thiên thạch và mưa thêm (5) thiên thạch tại các vị trí ngẫu nhiên trên khắp chiến trường.",
      },
    ],
    frontiersReinforcements: [
      {
        name: "Trained Volunteers",
        imgFirst: "3Q5sd7L",
        subName: "(Tình nguyện viên được đào tạo) (2 Stars)",
        describe:
          "Tình nguyện viên được đào tạo có thêm sức khỏe và gây thêm một chút sát thương. (50 HP, 1-3 sát thương)",
      },
      {
        name: "Men-at-Arms",
        imgFirst: "3Mg5Xqt",
        subName: "(Người cầm súng) (3 Stars)",
        describe:
          "Men-at-Arms có nhiều sức khỏe hơn và mặc áo giáp tốt. (70 HP, 10% giáp, 2-4 sát thương)",
      },
      {
        name: "Champion",
        imgFirst: "47leHnB",
        subName: "(Vô Địch) (3 Stars)",
        describe:
          "Các nhà vô địch thậm chí còn có nhiều máu hơn và sử dụng vũ khí tuyệt vời. (90 HP, 20% giáp, 3-6 sát thương)",
      },
      {
        name: "Sworn Blades",
        imgFirst: "3SjaADU",
        subName: "(Lưỡi thề) (3 Stars)",
        describe:
          "Sworn Blades có nhiều máu nhất và sử dụng vũ khí kép. (110 HP, 30% giáp, 6-10 sát thương)",
      },
      {
        name: "Recurve Bow",
        imgFirst: "3Q1whG0",
        subName: "(Cung Recurve) (4 Stars)",
        describe:
          "Cung cấp cho quân tiếp viện một loại vũ khí tầm xa có thể nhắm mục tiêu vào kẻ thù trên mặt đất và trên không. (110 HP, 30% giáp, 6-10 sát thương, 16-30 sát thương tầm xa)",
      },
    ],
    // 6 Upgrades Origins
    originArcher: [
      {
        name: "Master Shooter",
        imgFirst: "45Mc2BQ",
        subName: "(Bậc thầy bắn súng) (1 star)",
        describe: "Tăng sát thương tấn công của Archer (thêm 5%).",
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
          "Cung thủ gây sát thương tối đa lên các mục tiêu không có áo giáp.",
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
          "Các đòn tấn công của cung thủ có 15% khả năng gây chảy máu nặng trong 3 giây. Điều này gây ra 23 sát thương, trong đó mỗi tích tắc gây 10% sát thương của mũi tên (sau giáp), làm tròn lên, thành sát thương chuẩn. Chảy máu có thể xếp chồng lên nhau và với các dạng chảy máu khác.",
        table: `Tòa tháp	Sát thương đổ máu tối đa
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
          "Giảm chi phí xây dựng doanh trại cơ bản. (-10% cho Doanh trại cấp 1-3)",
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
          "Các đòn tấn công của lính gây thêm 15% sát thương phép (làm tròn).",
        table: `Tòa tháp	Sát thương mà không cần nâng cấp (có nâng cấp)
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
          "Lính có 10% khả năng lừa chết khi gây sát thương chí mạng. (Những người lính hồi sinh với đầy đủ sức khỏe khi tiến hành.)",
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
        describe: "Tăng sát thương tấn công của Pháp sư (15%).",
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
          'Các đòn tấn công của pháp sư có một cơ hội nhỏ để gây sát thương gấp ba lần. (Mỗi tia có 5% cơ hội và nó được hiển thị dưới dạng "VỤ NỔ!".)',
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
        describe: "Tăng sát thương tấn công của Druid (10%).",
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
          "Vụ nổ của tảng đá bỏ qua áo giáp vật lý. (loại sát thương được thay đổi thành True damage)",
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
          "Tăng sát thương của tia sét và giảm thời gian hồi chiêu thêm 10 giây.",
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
          "Tăng sát thương của sấm sét và tăng gấp đôi hiệu ứng làm chậm gió.",
      },
      {
        name: "Furious Tempest",
        imgFirst: "493lBzl",
        subName: "(Bão tố giận dữ) (3 stars)",
        describe:
          "Tăng sát thương của tia sét và ném thêm tia sét vào kẻ thù ngẫu nhiên.",
      },
    ],

    originReinforcements: [
      {
        name: "Skilled Defenders",
        imgFirst: "474urLi",
        subName: "(Hậu vệ có kỹ năng) (2 stars)",
        describe:
          "Những người phòng thủ có kỹ năng có nhiều sức khỏe hơn và trang bị tốt hơn. (60 HP, 3-5 sát thương, 20% giáp)",
      },
      {
        name: "Elven Stars",
        imgFirst: "474pBOq",
        subName: "(Sao Yêu Tinh) (3 stars)",
        describe:
          "Cung cấp cho quân tiếp viện một loại vũ khí tầm xa có thể nhắm mục tiêu vào kẻ thù trên mặt đất và trên không. (60 HP, 20% giáp, 3-5 sát thương, 7-10 sát thương tầm xa)",
      },
      {
        name: "Green Wardens",
        imgFirst: "46JONd0",
        subName: "(Người bảo vệ xanh) (3 stars)",
        describe:
          "Green Wardens có nhiều sức khỏe hơn, áo giáp tốt hơn và vũ khí cải tiến. (100 HP, 35% giáp, 5-10 sát thương, 10-20 sát thương tầm xa)",
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
          "Lính canh mặt trăng là những nữ thợ săn yêu tinh ưu tú, cưỡi những con báo khổng lồ. (150 HP, 50% giáp, 10-15 sát thương, 20-30 sát thương tầm xa)",
      },
    ],
    // 4 Upgrades Vengeance
    vengeanceTowers: [
      {
        name: "BLITZ TACTICS",
        imgFirst: "494nQ5u",
        subName: "(Chiến thuật Blitz) (1 điểm nâng cấp)",
        describe: "Tăng vàng thưởng khi gọi đợt đầu. (80% vàng bổ sung)",
      },
      {
        name: "WAR RATIONS",
        imgFirst: "474nRo4",
        subName: "(Chiến tranh) (1 điểm nâng cấp)",
        describe:
          "Khi no bụng, các đơn vị Doanh trại được cải thiện sức khỏe. (Thêm 30% HP)",
      },
      {
        name: "GXR-1 TARGETING SYSTEM",
        imgFirst: "499Bdl1",
        subName: "(Hệ thống mục tiêu) (2 điểm nâng cấp)",
        describe:
          "Được cải tiến với công nghệ Goblin, Tháp Bắn cung có thêm tầm bắn. (phạm vi bổ sung 5%)",
      },
      {
        name: "BIGGER BOMBS",
        imgFirst: "474nTwc",
        subName: "(Bom lớn hơn) (1 điểm nâng cấp)",
        describe:
          "Được kết hợp với thuật giả kim mạnh mẽ, các vụ nổ giờ đây có phạm vi hiệu ứng lớn hơn. (Thêm 20% diện tích hiệu ứng)",
      },
      {
        name: "RUNES OF POWER",
        imgFirst: "3tCMZnu",
        subName: "(2 điểm nâng cấp)",
        describe:
          "Ba tháp pháp sư <b>Infernal Mage</b>, <b>Spectral Mausoleum</b> và <b>Deep Devils Reef</b> có một chút khả năng gây sát thương gấp đôi trong mỗi đòn tấn công. (10% cơ hội gây sát thương gấp đôi)",
      },
      {
        name: "GUILD OF MERCHANTS",
        imgFirst: "40fKiEQ",
        subName: "(Hội nghị thương nhân) (2 điểm nâng cấp)",
        describe:
          "Chi phí cho các kỹ năng đặc biệt của tháp hiện đã giảm. (giảm 15% chi phí)",
      },
      {
        name: "MASTER ARCHITECTS",
        imgFirst: "46Fru4b",
        subName: "(Kiến trúc chuyên gia) (2 điểm nâng cấp)",
        describe:
          "Tất cả các tòa tháp đều nhận thêm sát thương. (Thêm 10% sát thương tấn công cơ bản)",
      },
      {
        name: "DEATHRAY COILS",
        imgFirst: "46KApBm",
        subName: "(Cuộn Deathray) (4 điểm nâng cấp)",
        describe:
          "Thay thế cờ trên mỗi lối ra bằng cuộn dây Tesla chết người có tác dụng hạ gục kẻ thù đang lao tới. Những cuộn dây này có thể hạ gục kẻ thù cứ sau 180 giây với 150-300 sát thương chuẩn.",
      },
    ],
    vengeanceHeroes: [
      {
        name: "BACK TO BATTLE",
        imgFirst: "46N6Qiz",
        subName: "(Trở lại trận chiến) (1 điểm nâng cấp)",
        describe: "Giảm thời gian hồi sinh của Tướng. (Giảm 10% hồi sinh)",
      },
      {
        name: "SPECIAL TRAINING",
        imgFirst: "46ENH2r",
        subName: "(Đào tạo đặc biệt) (1 điểm nâng cấp)",
        describe:
          "Nhờ bí mật và cường độ luyện tập cao, các anh hùng sẽ lên cấp nhanh hơn. (tăng thêm 25% XP)",
      },
      {
        name: "ONE MAN ARMY",
        imgFirst: "3Q1wU2k",
        subName: "(Một người lính) (2 điểm nâng cấp)",
        describe:
          "Tất cả các anh hùng đều cải thiện sát thương tấn công cơ bản của họ. (thêm 15% sát thương)",
      },
      {
        name: "ULTIMATE POWER",
        imgFirst: "40anMgp",
        subName: "(Sức mạnh tuyệt vời) (1 điểm nâng cấp)",
        describe:
          "Tất cả các kỹ năng tối thượng của anh hùng giờ đây đã giảm thời gian hồi chiêu. (Giảm 20% CD)",
      },
      {
        name: "IRON WILL",
        imgFirst: "3S7BIG7",
        subName: "(2 điểm nâng cấp)",
        describe:
          "Tất cả các anh hùng đều cải thiện sức khỏe tối đa của họ. (tăng 20% HP)",
      },
      {
        name: "SHIELD OF PROTECTION",
        imgFirst: "3Q82GL8",
        subName: "(Lá chắn bảo vệ) (2 điểm nâng cấp)",
        describe:
          "Mỗi đòn tấn công cơ bản gây ra cho anh hùng có một cơ hội nhỏ không gây sát thương. (10% cơ hội kích hoạt)",
      },
      {
        name: "SECOND WIND",
        imgFirst: "406SJ52",
        subName: "(Gió thứ 2) (4 điểm nâng cấp)",
        describe:
          "Các anh hùng bây giờ có một cơ hội nhỏ để hồi sinh ngay lập tức. (10% cơ hội kích hoạt)",
      },
    ],
    vengeanceDemonGoonies: [
      {
        name: "INFERNAL COMBUSTION",
        imgFirst: "3QcLcNA",
        subName: "(Đốt cháy địa ngục) (1 điểm nâng cấp)",
        describe:
          "Sau khi chết, Goonies phát nổ gây 20 sát thương vật lý trong phạm vi 90.",
      },
      {
        name: "TRAINED GOONIES",
        imgFirst: "3FBf2Gx",
        subName: "(Goonies được đào tạo) (2 điểm nâng cấp)",
        describe:
          "Được huấn luyện tốt hơn để chiến đấu, Goonies giờ đây đã được cải thiện về sức khỏe và sát thương.",
      },
      {
        name: "DEMON GUARDS",
        imgFirst: "3Mg0Si2",
        subName: "(Vệ binh quỷ) (3 điểm nâng cấp)",
        describe:
          "Goonies hiện là Vệ binh quỷ! Chúng có khả năng chịu được lượng sát thương khổng lồ. Loại trừ lẫn nhau với Hellion Tridents. (Đốt cháy địa ngục: 10 sát thương vật lý trong phạm vi 90)",
      },
      {
        name: "INFERNAL NOVA",
        imgFirst: "3Md1sNs",
        subName: "(2 điểm nâng cấp)",
        describe:
          "Vệ binh quỷ giờ sẽ chết với một vụ nổ lớn hơn. Gây 40 sát thương vật lý trong phạm vi 120.",
      },
      {
        name: "HELLION TRIDENTS",
        imgFirst: "3FuZu7i",
        subName: "(3 điểm nâng cấp)",
        describe:
          "Goonies giờ là Trident Hellon! Chúng là những con quỷ có thể tấn công kẻ thù bằng một đòn tấn công tầm xa. Loại trừ lẫn nhau với Vệ binh quỷ. (Đốt cháy địa ngục: 20 sát thương vật lý trong phạm vi 90)",
      },
      {
        name: "FLAMING TRIDENTS",
        imgFirst: "3s4ibM5",
        subName: "(Đinh ba rực lửa) (2 điểm nâng cấp)",
        describe:
          "Đinh ba Hellion giờ đây sẽ ném những chiếc đinh ba đang cháy khiến kẻ địch bị đốt cháy khi va chạm trong một khoảng thời gian ngắn. (Sát thương đốt cháy: 10 sát thương vật lý trong 2 giây)",
      },
      {
        name: "PIT LORD",
        imgFirst: "3MdMBSQ",
        subName: "(6 điểm nâng cấp)",
        describe:
          "Khi quân tiếp viện được gọi đến chiến trường, giờ đây có 30% cơ hội triệu tập Pit Lord cùng với họ. (Đốt cháy địa ngục: 50 sát thương nổ trong phạm vi 90)",
      },
    ],
    vengeanceSoulImpact: [
      {
        name: "EXTRA IMPACTS",
        imgFirst: "45KJn0e",
        subName: "(2 điểm nâng cấp)",
        describe:
          "Khi sử dụng phép thuật, sẽ thêm một tác động bổ sung gần nơi bị trúng đòn đầu tiên.",
      },
      {
        name: "SOUL SHOCKWAVE",
        imgFirst: "3s6zOLm",
        subName: "(1 điểm nâng cấp)",
        describe:
          "Tác động giờ sẽ làm choáng kẻ địch bị ảnh hưởng trong 0,4 giây.",
      },
      {
        name: "CALL OF THE DAMNED",
        imgFirst: "3Qttirj",
        subName: "(3 điểm nâng cấp)",
        describe:
          "Sau khi va chạm, mỗi bóng phóng ra 2 bóng ma đuổi theo và gây 7-22 sát thương cho kẻ địch.",
      },
      {
        name: "EXTRA SPECTRES",
        imgFirst: "3QuFXtZ",
        subName: "(2 điểm nâng cấp)",
        describe:
          "Tác động linh hồn giờ sẽ giải phóng tối đa 4 bóng ma khi chúng chạm vào.",
      },
      {
        name: "FEAR OF THE DAMNED",
        imgFirst: "3s3afe6",
        subName: "(1 điểm nâng cấp)",
        describe:
          "Kẻ địch bị bóng ma tấn công sẽ di chuyển với tốc độ 50% tốc độ của chúng trong 2 giây.",
      },
      {
        name: "FEAST OF THE DAMNED",
        imgFirst: "46Gyb68",
        subName: "(1 điểm nâng cấp)",
        describe:
          "Mỗi kẻ địch bị giết bởi phép thuật này sẽ giảm thời gian hồi chiêu cho lần thi triển tiếp theo.",
      },
      {
        name: "SOUL ECHOES",
        imgFirst: "45DiYRS",
        subName: "(Tiếng vọng linh hồn) (3 điểm nâng cấp)",
        describe:
          "Sau khi tác động kết thúc, có 25% khả năng tác động lại vào cùng một vị trí.",
      },
      {
        name: "TORNADO OF SOULS",
        imgFirst: "3S9OUdu",
        subName: "(5 điểm nâng cấp)",
        describe:
          "Khi sử dụng phép thuật, 2 tác động bổ sung sẽ rơi xuống khắp chiến trường.",
      },
    ],
  };
  // big Data
  const bigData = {
    // 8 Towers Kingdom Rush
    "Rangers Hideout": {
      name: "Rangers Hideout",
      imgSmall: "3Qw7Dij",
      imgBig: "3Fx7epC",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/toa-thap-rangers-hideout-trong-kingdom.html",
      linkTitle: "Tháp Rangers Hideout Trong Kingdom Rush",
      skills: [
        {
          name: "Poison Arrows",
          imgFirst: "493RoQB",
          subName: '(Mũi tên độc) "Sẽ không đau... lâu đâu."',
          describe:
            "Đầu độc kẻ địch, khiến chúng chịu sát thương chuẩn trong 3 giây. Hiệu ứng này không cộng dồn. Rangers Hideout được nâng cấp bằng Mũi tên độc sẽ ưu tiên những kẻ thù không miễn nhiễm với chất độc nhưng hiện không bị nhiễm độc.",
          table:
            "Level\tTrị giá\tDamage mỗi giây\n1\t250\t5\n2\t250\t10\n3\t250\t15",
        },
        {
          name: "Wrath of the Forest",
          imgFirst: "4992nZi",
          subName: '(Cơn thịnh nộ của rừng) "Nó là một cái bẫy!"',
          describe:
            "Triệu hồi gai và dây leo bẫy tối đa 8 kẻ địch trong phạm vi, gây 40 sát thương vật lý mỗi giây. Kẻ thù bị mắc kẹt sẽ bị cản trở quá trình hồi phục. Khả năng này cần ít nhất hai kẻ thù trong phạm vi để kích hoạt và chỉ có thể sử dụng tổng cộng ba lần lên bất kỳ kẻ thù nào. (Thời gian hồi chiêu: 8 giây)",
          table:
            "Level\tTrị giá\tKhoảng thời gian\n1\t300\t1 giây\n2\t150\t2 giây\n3\t150\t3 giây",
        },
      ],
      achievements: [
        {
          name: "TOXICITY",
          imgFirst: "3FxDAQM",
          describe: "Tiêu diệt 50 kẻ thù bằng sát thương độc.",
        },
        {
          name: "ENTANGLED",
          imgFirst: "3tTkLoz",
          describe: "Giữ 500 kẻ thù trở lên bằng Wrath of the Forest.",
        },
      ],
      upgrades: upgradesData.kdrArcher,
    },
    "Holy Order": {
      name: "Holy Order",
      imgSmall: "3Q7dCZr",
      imgBig: "3QuqlGP",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/thap-holy-order-trong-kingdom-rush.html",
      linkTitle: "Tháp Holy Order Trong Kingdom Rush",
      skills: [
        {
          name: "Healing Light",
          imgFirst: "40gSyV6",
          imgLast: "3FwDpW8",
          subName: '(Ánh sáng chữa lành) "Sẽ có ánh sáng!"',
          describe:
            "Paladin có thể tự chữa lành vết thương sau mỗi 10 giây. Việc chữa lành không loại bỏ các debuff, chẳng hạn như bệnh <b>Wererat</b> và <b>Rotshroom</b>.",
          table:
            "Level\tTrị giá\tĐang lành lại\n1\t150\t40-60\n2\t150\t80-120\n3\t150\t120-180",
        },
        {
          name: "Shield of Valor",
          imgFirst: "46Ydli4",
          subName: '(Lá chắn dũng cảm) "Không rút lui không đầu hàng!"',
          describe:
            "Tăng cường khả năng bảo vệ của Paladins, cải thiện áo giáp của họ từ 50% lên 65% (60% lên 75% khi nâng cấp Better Armor).",
          table: "Trị giá\tGiáp tăng thêm\n250\t+15%",
        },
        {
          name: "Holy Strike",
          imgFirst: "4733lV4",
          imgLast: "46JUurp",
          subName: '(Thánh công) "Bằng lửa thánh hãy được thanh tẩy!"',
          describe:
            "Đòn tấn công của Paladin có 10% cơ hội trở thành Thánh Kích, gây sát thương vật lý trong một phạm vi nhỏ. (Nó chỉ gây sát thương chuẩn trên Flash.)",
          table:
            "Level\tTrị giá\tDamage\n1\t220\t25-45\n2\t150\t50-90\n3\t150\t75-135",
        },
      ],
      achievements: [
        {
          name: "MEDIC!",
          imgFirst: "3FPtGdL",
          describe:
            "Yêu cầu các Paladin của bạn hồi phục tổng cộng 7000 mạng sống.",
        },
        {
          name: "HOLY CHORUS",
          imgFirst: "46DU8Tc",
          describe:
            "Yêu cầu các Paladin của bạn thực hiện 100 đòn Holy Strikes.",
        },
      ],
      upgrades: upgradesData.kqdBarracks,
    },
    "Arcane Wizard": {
      name: "Arcane Wizard",
      imgSmall: "3s7FWmA",
      imgBig: "3SdHxlw",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/thap-arcane-wizard-trong-kingdom-rush.html",
      linkTitle: "Tháp Arcane Wizard Trong Kingdom Rush",
      skills: [
        {
          name: "Death Ray",
          imgFirst: "493Ss73",
          imgLast: "3S9ON1t",
          subName: "(Tia tử thần)",
          describe:
            "Phân hủy kẻ thù thành bụi mịn. Không bao gồm trùm và trùm nhỏ.",
          table:
            "Level\tTrị giá\tHồi chiêu\n1\t350\t20 giây\n2\t200\t18 giây\n3\t200\t16 giây",
        },
        {
          name: "Teleport",
          imgFirst: "46Kpwzl",
          imgLast: "49iRYu6",
          subName:
            '(Dịch chuyển tức thời) "Không gian chỉ đơn thuần là một nhận thức, một mối quan tâm đối với con người phàm trần."',
          describe:
            "Dịch chuyển một nhóm kẻ thù trở lại đường đi. (Thời gian hồi chiêu: 10 giây) Không bao gồm trùm và trùm nhỏ. Kẻ địch chỉ có thể bị dịch chuyển tối đa 3 lần.",
          table:
            "Level\tTrị giá\tMục tiêu tối đa\tKhoảng cách truyền\n1\t300\t4\t21-30 nút\n2\t100\t5\t26-35 nút\n3\t100\t6\t31-40 nút",
        },
      ],
      achievements: [
        {
          name: "DUST TO DUST",
          imgFirst: "3SdHQNc",
          describe: "Làm tan rã 50 kẻ thù trở lên.",
        },
        {
          name: "BEAM ME UP SCOTTY",
          imgFirst: "46UCdaG",
          describe: "Dịch chuyển 250 kẻ thù trở lên.",
        },
      ],
      upgrades: upgradesData.kdrMagic,
    },
    "500mm Big Bertha": {
      name: "500mm Big Bertha",
      imgSmall: "3MeP4MN",
      imgBig: "3Mh6cBA",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/thap-phao-500mm-big-bertha-trong.html",
      linkTitle: "Tháp 500mm Big Bertha Trong Kingdom Rush",
      skills: [
        {
          name: "Dragonbreath Launcher",
          imgFirst: "3QuPOA3",
          subName: '"Đảm bảo có sự hỗn loạn. Hãy thận trọng khi sử dụng."',
          describe:
            "Phóng một tên lửa tầm xa đi tìm kiếm kẻ thù và không bao giờ trượt. Họ tìm mục tiêu khác nếu mất mục tiêu hiện tại. (Thời gian hồi chiêu: 13 giây) (14.1s trên Steam/Android, 6.5s khi chỉ bắn tên lửa)<br/>Dragonbreath Launcher sẽ nhắm mục tiêu vào đơn vị kẻ thù gần lối ra nhất và cũng có thể nhắm mục tiêu vào kẻ thù đang bay.",
          table:
            "Level\tTrị giá\tDamage\tPhạm vi phát hiện\n1\t250 (187)\t100-140\t120%\n2\t100 (75)<br/>125 (93)<sup>Flash</sup>\t140-180\t140%\n3\t100 (75)<br/>125 (93)<sup>Flash</sup>\t180-220\t160%",
        },
        {
          name: "Cluster Launcher Xtreme",
          imgFirst: "3S9RoIL",
          subName: '"...Có mùi như chiến thắng!"',
          describe:
            "Bắn ra một quả bom đặc biệt sẽ phát nổ trên không và thả nhiều quả bom nhỏ vào khu vực. (Thời gian hồi chiêu: 17,5 giây - cứ sau 5 đòn tấn công một lần, 12,5 giây trên Flash)",
          table:
            "Level\tTrị giá\tDamage\tSố lượng bom nhỏ\n1\t250 (187)\t60-80\t3\n2\t150 (112)<br/>125 (93)<sup>Flash</sup>\t60-80\t5\n3\t150 (112)<br/>125 (93)<sup>Flash</sup>\t60-80\t7",
        },
      ],
      achievements: [
        {
          name: "ROCKETEER",
          imgFirst: "46HG8bf",
          describe: "Bắn 100 tên lửa.",
        },
        {
          name: "CLUSTERED",
          imgFirst: "494Bh5s",
          describe: "Thả 1000 quả bom nhỏ trở lên bằng bom chùm.",
        },
      ],
      upgrades: upgradesData.kdrArtillery,
    },
    "Musketeer Garrison": {
      name: "Musketeer Garrison",
      imgSmall: "3Qce5t9",
      imgBig: "3Qdza6L",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/thap-musketeer-garrison-trong-kingdom.html",
      linkTitle: "Tháp Musketeer Garrison Trong Kingdom Rush",
      skills: [
        {
          name: "Sniper Shot",
          imgFirst: "3QcTYuW",
          imgLast: "3Q2y5hO",
          subName: '(Bắn tỉa) "Một nhát một chết..."',
          describe:
            "Bắn tầm xa 1,5 lần với cơ hội tiêu diệt kẻ thù ngay lập tức. Nếu thất bại, nó sẽ gây thêm sát thương vật lý bằng cơ hội giết chết nhân với HP tối đa của mục tiêu bên cạnh sát thương tấn công cơ bản. Sniper Shot không ảnh hưởng tới trùm hoặc trùm nhỏ ( Thời gian hồi chiêu: 14 giây )Công thức tính sát thương của Sniper Shot thất bại là: (Instakill% * HP hiện tại của mục tiêu) + sát thương tấn công thông thường.",
          table:
            "Level\tTrị giá\tCơ hội Instakill\n1\t250\t20%\n2\t250\t40%\n3\t250\t60%",
        },
        {
          name: "Shrapnel Shot",
          imgFirst: "3Qc0Ict",
          imgLast: "3QufGMl",
          subName: '(Mảnh đạn bắn) "Sẽ không đau...lâu nữa."',
          describe:
            'Cú bắn tầm ngắn phát nổ và gây sát thương cho tất cả kẻ địch trong phạm vi, bao gồm cả kẻ địch đang bay. Đòn tấn công bao gồm 6 quả nho có thể gây ra sát thương lớn, đặc biệt khi sử dụng chế độ "Nhắm mục tiêu thông minh" có thể đạt tới 720 sát thương.  ( Thời gian hồi chiêu: 9 giây )',
          table:
            "Level\tTrị giá\tSát thương\n1\t300\t60-240\n2\t300\t120-480\n3\t300\t180-720",
        },
      ],
      achievements: [
        {
          name: "50 SHOTS 50 KILLS",
          imgFirst: "40a8RTu",
          describe: "Bắn tỉa 50 kẻ thù",
        },
      ],
      upgrades: upgradesData.kdrArcher,
    },
    "Barbarian Mead Hall": {
      name: "Barbarian Mead Hall",
      imgSmall: "45ORhWe",
      imgBig: "3FtE7Dq",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/thap-barbarian-mead-hall-trong-kingdom.html",
      linkTitle: "Tháp Barbarian Mead Hall Trong Kingdom Rush",
      skills: [
        {
          name: "Throwing Axes",
          imgFirst: "45LVUAy",
          imgLast: "3tNqYmd",
          subName: `(Rìu ném) "Trời đang mưa rìu!"`,
          describe: `Những kẻ man rợ có thể ném những chiếc rìu lớn xuống đất và đánh bay kẻ thù trong phạm vi. Thời gian hồi chiêu: 3,5 giây`,
          table: `Level	Trị giá	Damage	Phạm vi
        1	200	34-42	260
        2	100	44-52	280
        3	100	54-62	300`,
        },
        {
          name: "Hunting Nets",
          imgFirst: "474cEnG",
          subName: `(Lưới săn) "Giữ vững lập trường, kiên định!"`,
          describe:
            "Bản chất là thợ săn, Barbarians có thể ném lưới để làm chậm kẻ thù đang bay trong một thời gian. (Chỉ trên Flash) Khả năng này vô hiệu hóa turbo của <b>Rocket Rider</b>.",
          table: `Level	Trị giá	Tốc độ chậm
        1	150	45
        2	75	60
        3	75	75`,
        },
        {
          name: "Whirlwind Attack",
          imgFirst: "3rWmQ2N",
          imgLast: "4737mZz",
          subName: `(Tấn công cơn lốc) "Tôi có chuyện muốn nhờ cậu.."`,
          describe: `Khi Người Barbari thực hiện cuộc tấn công cận chiến, họ có cơ hội biến đòn tấn công của mình trở thành một cuộc tấn công diện rộng, gây ra một lượng sát thương khác với sát thương vật lý. Mô tả nêu không chính xác rằng cơ hội sẽ chạy khi họ bị tấn công, nhưng nó thực sự chạy khi họ tấn công bằng chính đòn tấn công của mình. ( Chỉ dành cho thiết bị di động và Steam )`,
          table: `Level	Trị giá	Damage	Cơ hội
        1	150	25-45	15%
        2	100	40-60	20%
        3	100	55-75	25%`,
        },
        {
          name: "More Axes",
          imgFirst: "45LmHN6",
          imgLast: "4752iUi",
          subName: `(Nhiều trục hơn) "Nhân đôi chiếc rìu. Nhân đôi niềm vui!"`,
          describe: `Những kẻ man rợ trang bị thêm một chiếc rìu để gây thêm sát thương. Trên iOS, tốc độ tấn công của chúng bị chậm lại 0,3 giây sau lần nâng cấp này. Khi được nâng cấp đầy đủ, chúng có thể gây ra tới 54 sát thương.`,
          table: `Level	Trị giá	Thêm sát thương	Damage sau cấp độ này
        1	300	+10	26-34
        2	100	+20	36-44
        3	100	+30	46-54`,
        },
      ],
      achievements: [
        {
          name: "AXE RAIN!",
          imgFirst: "3QtwFyy",
          subName: `(Mưa rìu)`,
          describe: `Ném 500 Rìu trở lên!`,
        },
        {
          name: "ARE YOU NOT ENTERTAINED?",
          imgFirst: "477TZr7",
          subName: `(Bạn không giải trí)`,
          describe: `Yêu cầu một Barbarian tiêu diệt 10 kẻ thù.`,
        },
      ],
      upgrades: upgradesData.kqdBarracks,
    },
    "Sorcerer Mage": {
      name: "Sorcerer Mage",
      imgSmall: "3s5rHP3",
      imgBig: "471IBgl",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/thap-sorcerer-mage-trong-kingdom-rush.html",
      linkTitle: "Tháp Sorcerer Mage Trong Kingdom Rush",
      skills: [
        {
          name: "Polymorph",
          imgFirst: "474lthb",
          imgLast: "3FtsfS3",
          subName: `(Đa hình) "Meeeee!"`,
          describe: `Biến kẻ thù thành những con cừu vô hại. Cừu rất yếu nhưng không thể bị chặn. Cừu có thể được nhấp/chạm vào để khiến chúng phát nổ, giết chết chúng ngay lập tức.`,
          table: `Level	Trị giá	Hồi chiêu
        1	300	20 giây
        2	150	18 giây
        3	150	16 giây`,
        },
        {
          name: "Summon Elemental",
          imgFirst: "471xYdw",
          subName: `(Triệu hồi nguyên tố Đá) "Đá là vĩnh cửu"`,
          describe: `Triệu hồi Người Đá khổng lồ để chặn và tấn công kẻ thù của bạn. Rock Elemental gây sát thương diện rộng lên tối đa bốn mục tiêu ở gần. (Hồi máu: 20 HP/s, Hồi sinh: 8 giây)`,
          table: `Level	Trị giá	HP (Casual)	Damage (2.0s)	Giáp
        1	350	600 (700)	30-50	40%
        2	150	700 (800)	40-60	50%
        3	150	800 (900)	50-70	60%`,
          tableImg: "3Fuz5Xd",
        },
      ],
      achievements: [
        {
          name: "SHEPHERD",
          imgFirst: "494C5Hw",
          describe: `Polymorph 50 Kẻ thù biến thành cừu`,
        },
        {
          name: "ELEMENTALIST",
          imgFirst: "3FxI6yI",
          describe: `Triệu hồi 5 nguyên tố đá trong bất kỳ giai đoạn nào.`,
        },
      ],
      upgrades: upgradesData.kdrMagic,
    },
    "Tesla x104": {
      name: "Tesla x104",
      imgSmall: "3Fsoc8u",
      imgBig: "3QtdZ1Q",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/thap-tesla-x104-trong-kingdom-rush.html",
      linkTitle: "Tháp Tesla x104 Trong Kingdom Rush",
      skills: [
        {
          name: "Overcharge",
          imgFirst: "3Qukrp8",
          subName: `(Quá tải) "Đi cùng với cơn bão!"`,
          describe: `Bất cứ khi nào Tesla x104 tấn công, một trường tĩnh sẽ được tạo ra xung quanh tòa tháp, gây sát thương cho tất cả kẻ thù ở gần. Sát thương này có tính chất nổ, giống như đòn tấn công chính và do đó bỏ qua một nửa áo giáp của kẻ thù. Khả năng này có hiệu quả để đối phó với nhiều kẻ thù nhưng tương đối yếu, chẳng hạn như <b>Wulf</b> và <b>Skeleton</b>.`,
          table: `Level	Trị giá	Damage
        1	250 (187)	10-20
        2	125 (93)	20-30
        3	125 (93)	30-40`,
        },
        {
          name: "Supercharged Bolt",
          imgFirst: "407CrsQ",
          subName: `(Bu lông tăng áp) "Bạn đã bị sét đánh!"`,
          describe: `Tăng số lượng mục tiêu tối đa mà tia cung hướng tới. Số lượng cơ bản tối đa mà Tesla có thể đạt được là 3 mục tiêu.`,
          table: `Level	Trị giá	Mục tiêu tối đa
        1	250 (187)	4
        2	250 (187)	5`,
        },
      ],
      achievements: [
        {
          name: "ENERGY NETWORK",
          imgFirst: "4075aOp",
          describe: `Xây dựng 4 tòa tháp Tesla ở bất kỳ giai đoạn nào.`,
        },
        {
          name: "AC/DC",
          imgFirst: "45F4SQ0",
          describe: `Tiêu diệt 300 kẻ thù bằng điện.`,
        },
      ],
      upgrades: upgradesData.kdrArtillery,
    },
    // 3 Towers Special Kingdom Rush
    "Sylvan Elf Hall": {
      name: "Sylvan Elf Hall",
      imgSmall: "408jXIu",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/thap-sylvan-elf-hall-trong-kingdom-rush.html",
      linkTitle: "Tháp Sylvan Elf Hall Trong Kingdom Rush",
      achievements: [
        {
          name: "STILL COUNTS AS ONE",
          imgFirst: "40gWlSk",
          subName: `(Vẫn được tính là một)`,
          describe: `Yêu tinh của bạn gây ra 10.000 điểm sát thương.`,
        },
        {
          name: "FOREST DIPLOMACY",
          imgFirst: "40bFmAz",
          subName: `(Ngoại giao Rừng)`,
          describe: `Tuyển dụng yêu tinh tối đa tại Rừng Silveroak.`,
        },
      ],
    },
    Sasquatch: {
      name: "Sasquatch",
      imgSmall: "3MhiBFH",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/thap-sasquatch-trong-kingdom-rush.html",
      linkTitle: "Tháp Sasquatch Trong Kingdom Rush",
      achievements: [
        {
          name: "LIKE A HENDERSON",
          imgFirst: "3QtxlnA",
          subName: `(NHƯ MỘT HENDERSON)`,
          describe: `Giải phóng Sasquatch trên Đèo Icewind `,
        },
      ],
    },
    "Sunray Tower": {
      name: "Sunray Tower",
      imgSmall: "40cPfOM",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/thap-sunray-tower-trong-kingdom-rush.html",
      linkTitle: "Tháp Sunray Tower Trong Kingdom Rush",
      stats: `Sorcerers	Damage	Hồi chiêu
    1	75-125	19s (20s <sup>Flash</sup>)
    2	125-175	16s (17s <sup>Flash</sup>)
    3	175-225	13s (14s <sup>Flash</sup>)
    4	225-275	10s (11s <sup>Flash</sup>)`,
      achievements: [
        {
          name: "SUNBURNER!",
          imgFirst: "3rXUepR",
          subName: `(CHÁY NẮNG!)`,
          describe: `Bắn Sunray 20 lần.`,
        },
      ],
    },
    // 13 Heroes Kingdom Rush
    "Gerald Lightseeker": {
      name: "Gerald Lightseeker",
      imgSmall: "3QxWHAN",
      imgBig: "3SeJuhw",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-gerald-lightseeker-trong.html",
      linkTitle: "Anh Hùng Gerald Lightseeker Trong Kingdom Rush",
      skills: [
        {
          name: "Courage",
          imgLast: "3Sb3hOI",
          subName: `(Lòng can đảm)`,
          describe: `Học ở Cấp 2. Gerald Lightseeker sẽ tăng cường sức mạnh cho các đơn vị trong phạm vi xung quanh anh ta (yêu cầu ít nhất hai đồng minh đang tham gia cận chiến gần anh ta). Đơn vị bị ảnh hưởng sẽ phát ra hào quang màu xanh lam dưới chân họ. Kỹ năng này có thời gian duy trì là 6 giây. (Thời gian hồi chiêu: 8 giây)`,
          table: `Level kỹ năng	Level anh hùng	Tăng sát thương	Tăng cường hồi máu cho đồng minh	Tăng giáp
        1	2	+2	15% máu tối đa	+5%
        2	5	+4	15% máu tối đa	+10%
        3	8	+6	15% máu tối đa	+15%`,
        },
        {
          name: "Shield of Retribution",
          imgLast: "3QvMrJ8",
          subName: `(Lá chắn báo thù)`,
          describe: `Học ở cấp 4. Khi sử dụng, Gerald Lightseeker sẽ phản lại sát thương nhận phải từ kẻ địch và gây sát thương chuẩn cho chúng.`,
          table: `Level kỹ năng	Level anh hùng	Sát thương phản lại	Cơ hội
        1	4	100%	20%
        2	7	150%	40%
        3	10	200%	60%`,
        },
      ],
      stats: `Level	HP (Casual)	Damage (1.0s)	Giáp	Hồi sinh
    1	400 (480)	11-18	Low (30%)	15s
    2	420 (504)	12-20	Low (30%)	15s
    3	440 (528)	14-23	Medium (40%)	15s
    4	460 (552)	15-25	Medium (40%)	15s
    5	480 (576)	17-28	Medium (50%)	15s
    6	500 (600)	18-30	Medium (50%)	15s
    7	520 (624)	20-33	Medium (60%)	15s
    8	540 (648)	21-35	Medium (60%)	15s
    9	560 (672)	23-38	High (70%)	15s
    10	580 (696)	24-40	High (80%)	15s`,
    },

    "Alleria Swiftwind": {
      name: "Alleria Swiftwind",
      imgSmall: "476dLTB",
      imgBig: "3tMeKtW",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-alleria-swiftwind-trong.html",
      linkTitle: "Anh Hùng Alleria Swiftwind Trong Kingdom Rush",
      skills: [
        {
          name: "Multishot",
          imgLast: "3tLVooL",
          subName: `(Mưa tên)`,
          describe: `Alleria Swiftwind bắn nhiều mũi tên để tấn công nhiều kẻ thù. Nếu kẻ địch là kẻ duy nhất trong phạm vi của Alleria, sát thương sẽ vẫn được tính là nhiều mũi tên riêng lẻ. ( Thời gian hồi chiêu: 4 giây )`,
          table: `Level kỹ năng	Level anh hùng	Số lượng mũi tên
        1	2	3
        2	5	4
        3	số 8	5`,
        },
        {
          name: "Call of the Wild",
          imgLast: "46YimqU",
          subName: `(Tiếng gọi của thiên nhiên)`,
          describe: `Alleria Swiftwind chạm đất, triệu hồi Mèo Hoang để chiến đấu với kẻ thù. Wildcat là một đơn vị cận chiến thuần túy và sẽ theo sát bất cứ nơi nào Alleria đi tới. Alleria chỉ có thể triệu hồi 1 Wildcat mỗi lần. ( Hồi sinh: 20 giây )`,
          table: `Level kỹ năng	Level anh hùng	HP	Damage	Giáp
        1	4	200<br/>240<sup>Casual</sup><br/>250 <sup>Flash</sup>	6-8	None
        2	7	400<br/>480<sup>Casual</sup><br/>500 <sup>Flash</sup>	10-12	None
        3	10	600<br/>720<sup>Casual</sup><br/>750 <sup>Flash</sup>	14-16	None`,
        },
      ],
      stats: `Level	HP (Casual)	Damage gần (1.0s)	Damage xa (0.6s)	Giáp	Hồi sinh
    1	250 (300)	2-4	7-12	None	15s
    2	270 (324)	4-6	8-14	None	15s
    3	290 (348)	6-8	9-15	None	15s
    4	310 (372)	7-11	10-17	None	15s
    5	330 (396)	9-13	11-18	None	15s
    6	350 (420)	10-16	12-20	None	15s
    7	370 (444)	12-18	13-21	None	15s
    8	390 (468)	14-20	14-23	None	15s
    9	410 (492)	15-23	14-24	None	15s
    10	430 (516)	17-25	15-26	None	15s`,
    },

    "Malik Hammerfury": {
      name: "Malik Hammerfury",
      imgSmall: "46K7FJ5",
      imgBig: "3Sddx91",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/thap-malik-hammerfury-trong-kingdom-rush.html",
      linkTitle: "Anh hùng Malik Hammerfury Trong Kingdom Rush",
      skills: [
        {
          name: "Hammer Smash",
          imgLast: "3SvflL5",
          subName: `(Búa đập) (Thời gian hồi chiêu: 6 giây)`,
          describe: `Malik dùng búa đập mạnh xuống đất gây sát thương chuẩn diện rộng cho kẻ địch xung quanh. Kỹ năng này chỉ được sử dụng khi có tối thiểu 3 kẻ địch trong phạm vi tấn công của Malik.`,
          table: `Level kỹ năng	Level anh hùng	Damage
        1	2	20-40
        2	5	40-60
        3	8	60-80`,
        },
        {
          name: "Earthquake",
          imgLast: "46Jfgay",
          subName: `(Động đất) (Thời gian hồi chiêu: 15 giây)`,
          describe: `Malik dậm mạnh xuống đất khiến mặt đất xung quanh vỡ ra và gây sát thương chuẩn. Các đơn vị bị sát thương bởi đòn tấn công này sẽ bị choáng trong 2 giây. `,
          table: `Level kỹ năng	Level anh hùng	Damage
        1	4	18-78
        2	7	48-145
        3	10	60-216`,
        },
      ],
      stats: `Level	HP (Casual)	Damage gần (1.0s)	Giáp	Hồi sinh
    1	450 (540)	14-22	None	15s
    2	480 (576)	16-24	Low (10%)	15s
    3	510 (612)	18-26	Low (10%)	15s
    4	540 (648)	19-29	Low (20%)	15s
    5	570 (684)	21-31	Low (20%)	15s
    6	600 (720)	22-34	Low (30%)	15s
    7	630 (756)	24-36	Low (30%)	15s
    8	660 (792)	26-38	Medium (40%)	15s
    9	690 (828)	27-41	Medium (40%)	15s
    10	720 (864)	29-43	Medium (50%)	15s`,
    },
    "Bolin Farslayer": {
      name: "Bolin Farslayer",
      imgSmall: "3FwK2rp",
      imgBig: "45PyWIG",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-bolin-farslayer-trong-kingdom.html",
      linkTitle: "Anh Hùng Bolin Farslayer Trong Kingdom Rush",
      skills: [
        {
          name: "Mine Layer",
          imgLast: "45MMzbJ",
          subName: `(Lớp Mìn) (Thời gian hồi chiêu: 8 giây)`,
          describe: `Bolin ném một quả Mìn xuống đường. Quả mìn nổ gây sát thương diện rộng đối với bất kỳ đơn vị địch nào bước vào đó. Mìn biến mất sau 50 giây và được triển khai ngẫu nhiên trong phạm vi AoE xung quanh Bolin. Chỉ có thể có 8 quả Mìn hoạt động cùng một lúc. `,
          table: `Level kỹ năng	Level anh hùng	Damage
        1	2	30-60
        2	5	60-90
        3	8	90-120`,
        },
        {
          name: "Tar Bomb",
          imgLast: "3FwK96j",
          subName: `(Bom hắc ín) (Thời gian hồi chiêu: 16 giây)`,
          describe: `Bolin bắn ra một viên đạn chất lỏng màu nâu vào đường đi của kẻ địch. Khi chạm đất, một vũng nước Tar được hình thành. Vũng nước làm chậm các đơn vị địch bước lên nó.`,
          table: `Level kỹ năng	Level anh hùng	Chậm %	Khoảng thời gian
        1	4	30%	4 giây
        2	7	45%	6 giây
        3	10	60%	8 giây`,
        },
      ],
      stats: `Level	HP (Casual)	Damage gần (1.0s) và xa (3.8s)	Giáp	Hồi sinh
    1	400 (480)	9-15	None	15s
    2	430 (516)	11-18	None	15s
    3	460 (552)	12-20	None	15s
    4	490 (588)	14-23	None	15s
    5	520 (624)	15-25	None	15s
    6	550 (660)	17-28	None	15s
    7	580 (696)	18-30	None	15s
    8	610 (732)	20-33	None	15s
    9	640 (768)	21-35	None	15s
    10	670 (804)	23-38	None	15s`,
    },
    "Magnus Spellbane": {
      name: "Magnus Spellbane",
      imgSmall: "3FxK2qY",
      imgBig: "4955RMe",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-magnus-spellbane-trong-kingdom.html",
      linkTitle: "Anh hùng Magnus Spellbane Trong Kingdom Rush",
      skills: [
        {
          name: "Mirage",
          imgLast: "49al1zK",
          subName: `(Ảo ảnh) (Thời gian hồi chiêu: 10 giây)`,
          describe: `Magnus tạo ra Bóng tối của chính mình chiến đấu trong 10 giây. Chúng không thể điều khiển được và có khả năng chiến đấu cận chiến và tầm xa.`,
          table: `Level kỹ năng	Level anh hùng	Damage gần và xa	HP	Số ảo ảnh
        1	2	1-5	51 (61<sup>Casual</sup>)	1
        2	5	2-6	57 (68<sup>Casual</sup>)	2
        3	8	2-7	63 (75<sup>Casual</sup>)	3`,
        },
        {
          name: "Arcane Storm",
          imgLast: "3Fujabl",
          subName: `(Cơn bão bí ẩn) (Thời gian hồi chiêu: 15 giây)`,
          describe: `Magnus gọi ra một vòng tròn bí ẩn nhỏ trước mặt kẻ địch. Khi triệu hồi vòng tròn, các thiên thạch bí ẩn sẽ rơi xuống và gây sát thương chuẩn cho mỗi thiên thạch chạm vào đơn vị địch. `,
          table: `Level kỹ năng	Level anh hùng	Sát thương trên mỗi thiên thạch	Số lượng sao băng
        1	4	20	6
        2	7	20	12
        3	10	20	18`,
        },
      ],
      stats: `Level	HP (Casual)	Damage gần (1.0s)	Damage xa (1.1s)	Giáp	Hồi sinh
    1	170 (204)	1-1	9-27	None	15s
    2	190 (228)	2-2	11-32	None	15s
    3	210 (252)	2-4	12-36	None	15s
    4	230 (276)	3-5	14-41	None	15s
    5	250 (300)	4-6	15-45	None	15s
    6	270 (324)	5-7	17-50	None	15s
    7	290 (348)	6-8	18-54	None	15s
    8	310 (372)	6-10	20-59	None	15s
    9	330 (396)	7-11	21-63	None	15s
    10	350 (420)	8-12	23-68	None	15s`,
    },
    Ignus: {
      name: "Ignus",
      imgSmall: "3s4xCDU",
      imgBig: "49l6CB9",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-ignus-trong-kingdom-rush.html",
      linkTitle: "Anh hùng Ignus Trong Kingdom Rush",
      skills: [
        {
          name: "Surge of Flames",
          imgLast: "495Bllq",
          subName: `(Ngọn lửa bùng nổ) (Thời gian hồi chiêu: 4 giây)`,
          describe: `Ignus lao về phía kẻ thù ở tiền tuyến trong một quả cầu lửa. Quả cầu lửa gây sát thương cho các đơn vị địch đi trên đường đi của nó. Sát thương này được áp dụng 30 lần mỗi giây cho bất kỳ kẻ thù nào trong khu vực có trục chính 50 xung quanh Ignus.`,
          table: `Level kỹ năng	Level anh hùng	Sát thương trên mỗi tích tắc	Phạm vi
        1	2	10-20	260
        2	5	20-30	260
        3	số 8	30-40	260`,
        },
        {
          name: "Flaming Frenzy",
          imgLast: "3QuiMjr",
          subName: `(Sự điên cuồng rực lửa)`,
          describe: `Ignus phát ra một sóng xung kích gây sát thương và tự hồi phục bằng 20% máu tối đa. (Thời gian hồi chiêu: 5 giây)`,
          table: `Level kỹ năng	Level anh hùng	Damage
        1	4	20-30 (10-20 <sup>iOS</sup>)
        2	7	40-50 (20-30 <sup>iOS</sup>)
        3	10	60-70 (30-40 <sup>iOS</sup>)`,
        },
      ],
      stats: `Level	HP (Casual)	Damage cận chiến (1.0s)	Giáp	Hồi sinh
    1	400 (480)	18-30	None	12s
    2	430 (516)	20-33	None	12s
    3	460 (552)	21-35	None	12s
    4	490 (588)	23-38	None	12s
    5	520 (624)	24-40	None	12s
    6	550 (660)	26-43	None	12s
    7	580 (696)	27-45	None	12s
    8	610 (732)	29-48	None	12s
    9	640 (768)	30-50	None	12s
    10	670 (804)	32-53	None	12s`,
    },
    "King Denas": {
      name: "King Denas",
      imgSmall: "499y04C",
      imgBig: "3QuG6N5",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-king-denas-trong-kingdom-rush.html",
      linkTitle: "Anh hùng King Denas Trong Kingdom Rush",
      skills: [
        {
          name: "Royal Edict",
          imgLast: "497wOPd",
          subName: `(Sắc lệnh Hoàng gia) (Thời gian hồi chiêu: 10 giây)`,
          describe: `King Denas tăng sức mạnh cho các tòa tháp gần đó bằng hào quang màu tím trong bán kính AoE lớn. Hào quang giúp tháp tăng thêm 20% tốc độ tấn công và tầm đánh trong một khoảng thời gian nhất định. Doanh trại không bị ảnh hưởng bởi kỹ năng này. `,
          table: `Level kỹ năng	Level anh hùng	Khoảng thời gian
        1	2	3s
        2	5	6s
        3	8	9s`,
        },
        {
          name: "Catapult Barrage",
          imgLast: "45Qtrt7",
          subName: `(Máy bắn đá ) Thời gian hồi chiêu: 12 giây.`,
          describe: `Vua Denas ra lệnh cho cấp dưới của mình rời khỏi vùng chiến sự để gây ra tình trạng hỗn loạn trên một khu vực nhỏ nằm trên con đường thông qua dấu 'X'. Máy phóng bắn vào dấu 'X' trên khu vực gây sát thương. King Denas có thể di chuyển mà không làm gián đoạn kỹ năng miễn là có dấu 'X'. Đạn bỏ qua 1/2 giáp. `,
          table: `Level kỹ năng	Level anh hùng	Sát thương trên mỗi viên đạn	Số lượng đạn
        1	4	30	3
        2	7	40	5
        3	10	50	7`,
        },
      ],
      stats: `Level	HP (Casual)	Damage gần (1.5s)	Damage xa (0.67s)	Giáp	Hồi sinh
    1	300 (360)	11-19	11-19	None	15s
    2	320 (384)	14-23	14-23	None	15s
    3	340 (408)	17-28	17-28	None	15s
    4	360 (432)	20-33	20-33	None	15s
    5	380 (456)	23-38	23-38	None	15s
    6	400 (480)	25-42	25-42	None	15s
    7	420 (504)	28-47	28-47	None	15s
    8	440 (528)	31-52	31-52	None	15s
    9	460 (552)	34-56	34-56	None	15s
    10	480 (576)	37-61	37-61	None	15s`,
    },
    "Elora Wintersong": {
      name: "Elora Wintersong",
      imgSmall: "3QaP0iz",
      imgBig: "3s4rI5S",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-elora-wintersong-trong-kingdom.html",
      linkTitle: "Anh hùng Elora Wintersong Trong Kingdom Rush",
      skills: [
        {
          name: "Permafrost",
          imgLast: "3QazGST",
          subName: `(Lớp băng vĩnh cửu)`,
          describe: `Đóng băng mặt đất trong 2 giây và làm chậm kẻ thù đi 80% (bao gồm cả trùm nhỏ và trùm). (Thời gian hồi chiêu: 8 giây)`,
          table: `Level kỹ năng	Level anh hùng	Khoảng cách
        1	2	Ngắn
        2	5	Vừa phải
        3	8	Dài`,
        },
        {
          name: "Ice Storm",
          imgLast: "3tUQPs8",
          subName: `(Bão tuyết)`,
          describe: `Triệu hồi các cột băng đến một nơi, gây sát thương phép diện rộng. (Thời gian hồi chiêu: 10 giây)`,
          table: `Level kỹ năng	Level anh hùng	Sát thương trên mỗi cột băng	Số lượng băng
        1	4	30-60	3
        2	7	30-60	5
        3	10	30-60	8`,
        },
      ],
      stats: `Level	HP (Casual)	Damage gần (1.0s)	Damage xa (1.8s)	Giáp	Hồi sinh
    1	270 (324)	1-2	14-41	Low (20%)	15s
    2	290 (348)	2-4	16-47	Low (20%)	15s
    3	310 (372)	4-6	18-54	Low (20%)	15s
    4	330 (396)	6-8	20-61	Low (30%)	15s
    5	350 (420)	7-11	23-68	Low (30%)	15s
    6	370 (444)	9-13	25-74	Low (30%)	15s
    7	390 (468)	10-16	27-81	Medium (40%)	15s
    8	410 (492)	12-18	29-88	Medium (40%)	15s
    9	430 (516)	14-20	32-95	Medium (40%)	15s
    10	450 (540)	15-23	34-101	Medium (50%)	15s`,
    },
    "Ingvar Bearclaw": {
      name: "Ingvar Bearclaw",
      imgSmall: "3tNcLpr",
      imgBig: "45JyxYi",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-ingvar-bearclaw-trong-kingdom.html",
      linkTitle: "Anh hùng Ingvar Bearclaw Trong Kingdom Rush",
      skills: [
        {
          name: "Ancestor Call",
          imgLast: "40b14Vx",
          subName: `(Tiếng gọi tổ tiên) (Thời gian hồi chiêu: 15 giây)`,
          describe: `Triệu tập Tổ tiên Viking tồn tại trong 10 giây và hoạt động như Quân tiếp viện. (Tốc độ tấn công: 1,0 giây)`,
          table: `Level kỹ năng	Level anh hùng	HP	Damage	Giáp	Số đơn vị
        1	2	100	2-6	20%	1
        2	5	150	4-8	20%	2
        3	8	200	6-10	20%	3`,
        },
        {
          name: "Bear Form",
          imgLast: "3MfhxT0",
          subName: `(Hình Dạng Gấu) (Thời gian hồi chiêu: 20 giây)`,
          describe: `Khi máu từ 60% trở xuống, Ingvar biến thành gấu gây nhiều sát thương hơn, đạt trạng thái bất khả chiến bại, hồi 2 điểm máu mỗi giây ngay cả khi đang chiến đấu và hồi máu nhanh hơn nhưng không thể sử dụng Tiếng gọi Tổ tiên.`,
          table: `Level kỹ năng	Level anh hùng	Damage	Khoảng thời gian
        1	4	20-40	10s
        2	7	30-50	12s
        3	10	40-60	14s`,
        },
      ],
      stats: `Level	HP	Damage (1.5s)	Giáp	Hồi sinh
    1	430 (516<sup>Casual</sup>)	23-38	Low (15%)	15s
    2	460 (552<sup>Casual</sup>)	25-41	Low (15%)	15s
    3	490 (588<sup>Casual</sup>)	27-45	Low (15%)	15s
    4	520 (624<sup>Casual</sup>)	29-49	Low (20%)	15s
    5	550 (660<sup>Casual</sup>)	32-53	Low (20%)	15s
    6	580 (696<sup>Casual</sup>)	34-56	Low (20%)	15s
    7	610 (732<sup>Casual</sup>)	36-60	Low (25%)	15s
    8	640 (768<sup>Casual</sup>)	38-64	Low (25%)	15s
    9	670 (804<sup>Casual</sup>)	41-68	Low (30%)	15s
    10	670 (804<sup>Casual</sup>)\t 43-71	Medium (40%)	15s`,
    },
    Hacksaw: {
      name: "Hacksaw",
      imgSmall: "3FxKdm8",
      imgBig: "3Q4zDrM",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-hacksaw-trong-kingdom-rush.html",
      linkTitle: "Anh hùng Hacksaw Trong Kingdom Rush",
      skills: [
        {
          name: "Flying Sawblade",
          imgLast: "409G5SR",
          subName: `(Lưỡi cưa bay)`,
          describe: `Học ở cấp 2. Ném một lưỡi dao nảy vào nhiều kẻ địch, gây 45 sát thương chuẩn cho mỗi lần nảy. Thời gian hồi chiêu: 8 giây.`,
          table: `Level kỹ năng	Level anh hùng	Kẻ thù nhắm mục tiêu
        1	2	3
        2	5	5
        3	8	7`,
        },
        {
          name: "Tiiiimber",
          imgLast: "3Q8vFyw",
          subName: `(Mũi khoan tử thần)`,
          describe: `Học ở cấp 4. Giết kẻ thù ngay lập tức bằng mũi khoan.`,
          table: `Level kỹ năng	Level anh hùng	Hồi chiêu
        1	4	36s
        2	7	32s
        3	10	26s`,
        },
      ],
      stats: `Level	HP (Casual)	Damage gần (1.2s)	Giáp	Hồi sinh
    1	420 (504)	9-27	Medium (50%)	15s
    2	440 (528)	10-30	Medium (50%)	15s
    3	460 (552)	11-33	Medium (50%)	15s
    4	480 (576)	12-36	Medium (60%)	15s
    5	500 (600)	13-39	Medium (60%)	15s
    6	520 (624)	14-42	Medium (60%)	15s
    7	540 (648)	15-45	High (70%)	15s
    8	560 (672)	16-48	High (70%)	15s
    9	580 (696)	17-51	High (70%)	15s
    10	600 (720)	18-54	High (80%)	15s`,
    },
    Oni: {
      name: "Oni",
      imgSmall: "406ARaF",
      imgBig: "3rWKlbX",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-oni-trong-kingdom-rush.html",
      linkTitle: "Anh hùng Oni Trong Kingdom Rush",
      skills: [
        {
          name: "Sword Torment",
          imgLast: "3QwYXba",
          subName: `(Thời gian hồi chiêu: 15 giây)`,
          describe: `Oni đâm thanh kiếm của mình xuống đất, sử dụng ma thuật cổ xưa để triệu hồi những thanh kiếm được sử dụng bởi những chiến binh đã chết trong khu vực từ lâu, trỗi dậy và đâm kẻ thù từ bên dưới, gây sát thương chuẩn. `,
          table: `Level kỹ năng	Level anh hùng	Damage	Bán kính
        1	2	50-80	Trung bình
        2	5	80-110	Trung bình
        3	8	110-140	Trung bình`,
        },
        {
          name: "Death Strike",
          imgLast: "406HD09",
          subName: `(Cuộc tấn công tử thần) (Thời gian hồi chiêu: 12 giây)`,
          describe: `Oni giơ thanh kiếm lên quá đầu, truyền sức mạnh cổ xưa của các vị thần để tấn công một kẻ thù với sức mạnh đáng kinh ngạc, gây sát thương chuẩn hoặc giết chết nó ngay lập tức. `,
          table: `Level kỹ năng	Level anh hùng	Damage	Cơ hội tiêu diệt ngay lập tức
        1	4	180	10%
        2	7	260	15%
        3	10	340	20%`,
        },
      ],
      stats: `Level	HP (Casual)	Damage gần (1.25s)\t Giáp	Hồi sinh
    1	425 (510)	14-41	Low (30%)	18s
    2	450 (540)	15-45	Low (30%)	18s
    3	475 (570)	16-49	Low (30%)	18s
    4	500 (600)	18-53	Medium (40%)	18s
    5	525 (630)	19-56	Medium (40%)	18s
    6	550 (660)	20-60	Medium (40%)	18s
    7	575 (690)	21-64	Medium (50%)	18s
    8	600 (720)	23-68	Medium (50%)	18s
    9	625 (750)	24-71	Medium (50%)	18s
    10	650 (780)	25-75	Medium (60%)	18s`,
    },
    Thor: {
      name: "Thor",
      imgSmall: "45SGjiM",
      imgBig: "3SvfuOD",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-thor-trong-kingdom-rush.html",
      linkTitle: "Anh hùng Thor Trong Kingdom Rush",
      skills: [
        {
          name: "Mjolnir",
          imgLast: "3QwYZQk",
          subName: `(text)`,
          describe: `Đòn tấn công của Thor có 25% cơ hội giải phóng một luồng điện xiềng xích nhiều kẻ thù, gây sát thương chuẩn cho mục tiêu chính và sát thương phép thuật cho kẻ địch ở gần.`,
          table: `Level kỹ năng	Level anh hùng	Damage (chính / phụ)	Kẻ thù tối đa bị xích
        1	2	40/40	3
        2	5	60/40	4
        3	8	80/40	5`,
        },
        {
          name: "Thunderclap",
          imgLast: "475y4Rs",
          subName: `(Tiếng sét) (Thời gian hồi chiêu: 15 giây)`,
          describe: `Thor ném cây búa của mình để triệu hồi một tia sét từ trên trời, làm choáng các mục tiêu trong bán kính chỉ định trong 2 giây và gây sát thương chuẩn cho mục tiêu chính và sát thương phép cho các mục tiêu bổ sung. `,
          table: `Level kỹ năng	Level anh hùng	Damage (chính / phụ)
        1	4	60/50
        2	7	80/70
        3	10	120/90`,
        },
      ],
      stats: `Level	HP (Casual)	Damage (1.5s)	Giáp	Hồi sinh
    1	380 (456)	25-31	Medium (40%)	15s
    2	410 (492)	27-34	Medium (40%)	15s
    3	440 (528)	29-36	Medium (40%)	15s
    4	470 (564)	32-39	Medium (50%)	15s
    5	500 (600)	34-42	Medium (50%)	15s
    6	530 (636)	36-44	Medium (50%)	15s
    7	560 (672)	38-47	Medium (60%)	15s
    8	590 (708)	40-49	Medium (60%)	15s
    9	620 (744)	42-52	Medium (60%)	15s
    10	650 (780)	44-55	High (70%)	15s`,
    },
    "Ten'shí": {
      name: "Ten'shí",
      imgSmall: "3tUQXYE",
      imgBig: "3tRUI12",
      link: "https://kingdomrushtiengviet.blogspot.com/2023/09/anh-hung-tenshi-trong-kingdom-rush.html",
      linkTitle: "Anh hùng Ten'Shi Trong Kingdom Rush",
      skills: [
        {
          name: "Firerush!",
          subName: `(Hỏa hoạn!) (Thời gian hồi chiêu: 25 giây)`,
          describe: `Học ở Cấp 2. Ten'shí sẽ triệu hồi nhiều thiên thạch từ trên trời rơi xuống, gây sát thương chuẩn. Bắt đầu từ cấp 8, mỗi thiên thạch để lại hiệu ứng thiêu đốt, gây sát thương vật lý mỗi giây và tồn tại trong 10 giây. Giống như hiệu ứng thiêu đốt của Rain of Fire, hiệu ứng từ nhiều thiên thạch.`,
          table: `Level kỹ năng	Level anh hùng	Damage do thiên thạch	Số lượng thiên thạch	Sát thương thiêu đốt mỗi giây
        1	2	30-60	2	-
        2	5	45-75	3	-
        3	8	50-80	4	20-30`,
        },
        {
          name: "Iron Time",
          subName: `(Giờ Sắt)`,
          describe: `Học ở cấp 4. Khi có ba kẻ thù trở lên ở trong phạm vi ngắn của Ten'shí, anh ta sẽ biến thành một người đàn ông rất cơ bắp. Khi ở dạng này, anh ta miễn nhiễm với mọi sát thương và mất quyền truy cập vào dịch chuyển tức thời và Firerush! kỹ năng. Tuy nhiên, anh ta có được đòn tấn công sát thương diện rộng rất mạnh, gây sát thương bốn lần cho mỗi đòn tấn công và anh ta có được kỹ năng động đất giống như của Malik. Kỹ năng động đất có thể nhắm vào lối ra hoặc cách xa lối ra và nó sẽ luôn gây sát thương chuẩn trong vùng va chạm ban đầu, sau đó gây ra một số trận động đất nhỏ hơn gây sát thương vật lý. Sẽ luôn có một trận động đất theo hướng mà kỹ năng không nhắm tới và 3/4/6 theo hướng khác. Những trận động đất nhỏ hơn này có 25% cơ hội làm choáng kẻ địch mà chúng chạm phải, ngoại trừ trận động đất ở xa Ten'shí nhất có 100% cơ hội gây choáng. (Thời gian hồi chiêu: 10 giây sau khi biến trở lại dạng bình thường, tức là 16/19/22 giây nếu tính cả thời gian) Bất cứ khi nào Tenshi thực hiện kỹ năng này, anh ấy sẽ hét lên "Thời gian sắt đá".`,
          table: `Level kỹ năng	Level anh hùng	Khoảng thời gian	Sát thương xoay (Vật lý x 4, 2.0s)
        1	4	6 giây	18-36
        2	7	9 giây	23-45
        3	10	12 giây	27-54`,
          table2: `Level kỹ năng	Level anh hùng	Tác động ban đầu của trận động đất (Chuẩn, 9s)	Trận động đất nhỏ (Vật lý, 9s)	Số lượng trận động đất nhỏ
        1	4	50-70	10-20	3 + 1
        2	7	60-80	15-30	4 + 1
        3	10	70-90	20-40	6 + 1`,
        },
      ],
      stats: `Level	HP (Casual)	Damage gần (True, 1.35s)	Giáp	Hồi sinh
    1	380 (456)	14-22	20%	15s
    2	400 (480)	16-25	20%	15s
    3	420 (504)	18-28	20%	15s
    4	440 (528)	20-31	30%	15s
    5	460 (552)	22-34	30%	15s
    6	480 (576)	24-37	30%	15s
    7	500 (600)	26-40	40%	15s
    8	520 (624)	28-43	40%	15s
    9	540 (648)	30-46	40%	15s
    10	560 (672)	32-49	50%	15s`,
    },
    // 8 Towers Frontiers
    "Crossbow Fort": {
      name: "Crossbow Fort",
      imgSmall: "496xYdQ",
      imgBig: "3seD338",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Barrage",
          imgFirst: "494w51p",
          imgLast: "494BGov",
          subName: `"Nhanh lên hoặc là chết!"`,
          describe: `Xạ thủ Crossbow Fort bắn ra một loạt các tia chớp liên tiếp, mỗi tia gây 30-40 sát thương. Nó có thể thay đổi mục tiêu mới trong một góc giới hạn. ( Thời gian hồi chiêu: 5 giây - một lần sau 10 đòn đánh cơ bản )`,
          table: `Level	Giá	Số tia
        1	250	6
        2	150	8
        3	150	10`,
        },
        {
          name: "Falconer",
          imgFirst: "4956Hsm",
          imgLast: "3Q7jB0l",
          subName: `"Nhắm qua mắt chim ưng!"`,
          describe: `Tháp Crossbow Fort có cơ hội gây sát thương gấp đôi và cải thiện phạm vi tấn công của tất cả các tòa tháp (bao gồm cả chính nó) trong phạm vi của nó. Hiệu ứng này không cộng dồn.`,
          table: `Level	Trị giá	Phạm vi bổ sung	Cơ hội chí mạng
        1	200	+10%	5%
        2	200	+15%	10%
        3	200	+20%	15%`,
        },
      ],
      achievements: [
        {
          name: "HAWKEYE",
          imgFirst: "3Q4zV1Q",
          describe: `Áp dụng một phần thưởng Falconer cho 4 tòa tháp.`,
        },
        {
          name: "BLOT OUT THE SUN",
          imgFirst: "3Qdu8Hq",
          describe: `Cho Pháo đài nỏ bắn 10000 mũi tên.`,
        },
      ],
      upgrades: upgradesData.frontiersArcher,
    },

    "Assassin's Guild": {
      name: "Assassin's Guild",
      imgSmall: "3tOni3C",
      imgBig: "3tTrE9p",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Sneak Attack",
          imgFirst: "3Qvm6Li",
          imgLast: "3QuxaIr",
          subName: `(Tấn công lén lút) (Yêu cầu theo tốc độ!)`,
          describe: `Các đòn tấn công có cơ hội trở thành Tấn công lén lút, gây sát thương vật lý và có cơ hội giết chết ngay lập tức. Trên iOS, khả năng này được mô tả không chính xác là gây sát thương chuẩn.`,
          table: `Level	Trị giá	Sát thương	Cơ hội tấn công lén lút	Cơ hội tiêu diệt ngay lập tức*
        1	225	20-40	10%	3%
        2	150	30-50	15%	4%
        3	150	40-60	20%	5%`,
        },
        {
          name: "Counterattack",
          imgFirst: "3QwTcKW",
          imgLast: "3FtHp9K",
          subName: `(Phản công) (Không hành động mà không có phản ứng!)`,
          describe: `Cải thiện cơ hội né tránh của sát thủ và giờ sẽ tấn công trở lại sau khi né tránh thành công. Sát thủ không thể né tránh các cuộc tấn công diện rộng.`,
          table: `Level	Trị giá	Cơ hội né tránh	Sát thương
        1	150	50%	20-24
        2	100	60%	30-34
        3	100	70%	40-44`,
        },
        {
          name: "Pickpocket",
          imgFirst: "408mx18",
          imgLast: "3MgBnwT",
          subName: `(Kẻ móc túi) (Tôi gọi nó là săn tìm kho báu!)`,
          describe: `Các cuộc tấn công có cơ hội đánh cắp 1-3 Vàng. Tổng số vàng cho mỗi mục tiêu được giới hạn ở mức 30% tiền thưởng.`,
          table: `Level	Trị giá	Cơ hội trộm vàng
        1	100	30%
        2	100	40%`,
        },
      ],
      achievements: [
        {
          name: "ALI BABA",
          imgFirst: "3McR6wU",
          describe: `Yêu cầu sát thủ của bạn đánh cắp 10000 vàng.`,
        },
        {
          name: "TRY AND HIT ME!",
          imgFirst: "40c01EO",
          describe: `Yêu cầu sát thủ của bạn tránh được 1000 đòn tấn công.`,
        },
      ],
    },
    Archmage: {
      name: "Archmage",
      imgSmall: "3Fw05pn",
      imgBig: "45JFGrI",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Twister",
          imgFirst: "46UHT4u",
          imgLast: "3tFwQO6",
          subName: `"Có F5 không?"`,
          describe: `Một cơn lốc xoáy có thể chạy qua đám đông kẻ thù và cuốn chúng trở lại đường đi, gây sát thương phép. Kẻ địch bên trong cơn lốc xoáy không nhận sát thương từ các nguồn bên ngoài. <br/>(Thời gian hồi chiêu: 22 giây, 17,5 giây<sup>Flash</sup>)`,
          table: `Level	Trị giá	Kẻ thù tối đa	Sát thương	Khoảng cách
        1	350 (315)	5	40	20 nút
        2	250 (225)	6	60	25 nút
        3	250 (225)	7	80	30 nút`,
        },
        {
          name: "Critical Mass",
          imgFirst: "3QcY0U6",
          imgLast: "3Qc57w1",
          subName: `"Năng lượng không bao giờ mất đi..."`,
          describe: `Bất kỳ tia bắn nào đều có 35% cơ hội phát nổ, gây sát thương phép trong một khu vực nhỏ.`,
          table: `Level	Trị giá	Sát thương	Diện tích sát thương
        1	200 (180)	30	83
        2	200 (180)	60	90
        3	200 (180)	90	96`,
        },
      ],
      achievements: [
        {
          name: "FUJITA #5",
          imgFirst: "470Vbwg",
          describe: `Bắt 500 kẻ địch bằng phép thuật Twister.`,
        },
        {
          name: "OVERCHARGED",
          imgFirst: "3QwCKKH",
          describe: `Gây hơn 30000 sát thương với các vụ nổ Critical Mass.`,
        },
      ],
    },
    DWAARP: {
      name: "DWAARP",
      imgSmall: "3tTrT4j",
      imgBig: "495eAOt",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Core Drill",
          imgFirst: "46G2Bp9",
          imgLast: "3MgoqDc",
          subName: `(Khoan lõi) "Họ không thể nhìn thấy thứ gì đã đánh họ!"`,
          describe: `Gửi một mũi khoan khai thác tự động về phía kẻ thù*, biến nó thành một đống gib.
        *Không bao gồm <b>Bloodshell</b>, <b>Phantom Warrior</b>, <b>Ghost</b> và trùm nhỏ.`,
          table: `Level	Trị giá	Hồi chiêu (Với bản nâng cấp Gnomish Tinkering)
        1	400	26 (23) giây
        2	200	23 (20) giây
        3	200	20 (17) giây`,
        },
        {
          name: "Furnace Blast",
          imgFirst: "3rWL6Sl",
          imgLast: "4999xNa",
          subName: `(Vụ nổ lò) "Cho tôi nhiên liệu, cho tôi lửa..."`,
          describe: `Đốt cháy tất cả kẻ địch ở cự ly gần trong 4 giây, gây sát thương chuẩn. ( Thời gian hồi chiêu: 15 giây - cứ 5 đòn tấn công một lần )
        Đèn hiệu xoay trên tháp nhấp nháy màu đỏ khi khả năng sẵn sàng. Khi khả năng này được sử dụng, nó cũng gây sát thương nổ chính 25-45 (28-50) cho kẻ địch trong phạm vi. Cơn đau kéo dài thêm 1 giây. Vì vậy, kẻ địch sẽ bị thiêu cháy tối đa 5 giây.`,
          table: `Level	Giá	Max Damage*
        1	300	100 (4 mỗi 0.2s)
        2	250	175 (7 mỗi 0.2s)
        3	250	250 (10 mỗi 0.2s)`,
        },
      ],
      achievements: [
        {
          name: "DEATH FROM BELOW",
          imgFirst: "3rXVn0D",
          describe: `Tiêu diệt 100 kẻ thù bằng mũi khoan.`,
        },
        {
          name: "POPULAR BBQ",
          imgFirst: "3SbE8mW",
          describe: `Đốt cháy 20 kẻ thù cùng lúc.`,
        },
      ],
    },
    "Tribal Axethrowers": {
      name: "Tribal Axethrowers",
      imgSmall: "3MgBAjF",
      imgBig: "40cQi1a",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Totem of Weakness",
          imgFirst: "3s4lliP",
          imgLast: "3MgNwlH",
          subName: `(Hãy biến đi đi những kẻ yếu đuối!)`,
          describe: `Tạo ra một vật tổ làm suy yếu kẻ thù ở gần và khiến chúng chịu thêm 40% sát thương từ mọi nguồn. Nó cũng giảm một nửa sát thương cận chiến của kẻ thù bị ảnh hưởng. Không bao gồm các Trùm. ( Thời gian hồi chiêu: 10 giây )`,
          table: `Level	Trị giá	Khoảng thời gian
        1	250	3 giây
        2	200	6 giây
        3	200	9 giây`,
        },
        {
          name: "Totem of Spirits",
          imgFirst: "3Fxd7TA",
          imgLast: "3FtHAlq",
          subName: `( Chiến đấu với phép thuật bằng phép thuật.....)`,
          describe: `Tạo ra một vật tổ có khả năng xua tan mọi phép thuật và làm im lặng những người sử dụng phép thuật trong phạm vi. ( Thời gian hồi chiêu: 8 giây )`,
          table: `Level	Trị giá	Khoảng thời gian
        1	150	4 giây
        2	150	6 giây
        3	150	8 giây`,
        },
      ],
      achievements: [
        {
          name: "SILENCE PLEASE!",
          imgFirst: "3Fwcqd6",
          describe: `Làm im lặng 70 người sử dụng phép thuật bằng Spirit Totem.`,
        },
        {
          name: "CULL THE WEAK",
          imgFirst: "3s4xswm",
          describe: `Làm suy yếu 100 kẻ thù bằng Totem of Weakness.`,
        },
      ],
    },
    "Knights Templar": {
      name: "Knights Templar",
      imgSmall: "3SdeJJx",
      imgBig: "3MgNGtj",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Toughness",
          imgFirst: "3MbVUmk",
          subName: `(Độ dẻo dai) "Vì sự sống vĩnh cửu!"`,
          describe: `Tăng lượng máu tối đa và hiện tại của Knights Templar thêm 50 mỗi lần nâng cấp. (Chữa lành chúng hoàn toàn khi nâng cấp trên phiên bản Steam và Android).`,
          table: `Level	Trị giá	HP thưởng	HP tối đa [Với nâng cấp]
        1	200	50	300 [325]*
        2	200	100	350 [375]*
        3	200	150	400 [425]*`,
        },
        {
          name: "Arterial Strike",
          imgFirst: "3FwLkmf",
          imgLast: "49ayoAe",
          subName: `(Tấn công động mạch) "Hãy để nó chảy máu!"`,
          describe: `Các đòn tấn công có 10% khả năng gây chảy máu, gây sát thương chuẩn trong 3 giây. Khả năng này không có tác dụng với <b>Phantom Warrior</b> vì chúng không có cơ thể vật lý.`,
          table: `Level	Trị giá	Sát thương
        1	250	75
        2	150	120
        3	150	165`,
        },
        {
          name: "Holy Grail",
          imgFirst: "3SfJ8XM",
          imgLast: "3QyJdos",
          subName: `(Chén thánh) "Đó là cái cốc của thợ mộc."`,
          describe: `Hiệp sĩ dòng Đền có cơ hội đánh lừa cái chết mỗi khi họ bị gây sát thương chí mạng. Họ lấy lại phần trăm máu tối đa sau khi hồi sinh.`,
          table: `Level	Trị giá	Cơ hội để lừa chết	Đã lấy lại sức khỏe
        1	250	20%	20%
        2	150	30%	30%
        3	150	40%	40%`,
        },
      ],
      achievements: [
        {
          name: "HIGHLANDER",
          imgFirst: "3SdO9jQ",
          describe: `Cho một Templar hồi sinh 5 lần liên tiếp.`,
        },
        {
          name: "LET IT BLEED!",
          imgFirst: "3Mh86T0",
          describe: `Tiêu diệt 100 kẻ thù bằng cách để chúng chảy máu đến chết.`,
        },
      ],
    },
    Necromancer: {
      name: "Necromancer",
      imgSmall: "475sQ7Y",
      imgBig: "46E0jGS",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Pestilence",
          imgFirst: "45MHhgr",
          imgLast: "3QuGk7X",
          subName: `(Sâu bệnh) "Không phải là mục nát, mà là chín muồi..."`,
          describe: `Necromancer làm ô nhiễm vùng đất, đầu độc kẻ thù, gây 20 sát thương chuẩn mỗi giây. ( Thời gian hồi chiêu: 12 giây, 13 giây <sup>Flash</sup> )`,
          table: `Level	Trị giá	Khoảng thời gian
        1	325 (292)	4 giây
        2	200 (180)	5 giây
        3	200 (180)	6 giây`,
        },
        {
          name: "Summon Death Rider",
          imgFirst: "45MHikv",
          imgLast: "3Qthlls",
          subName: `(Triệu hồi Kỵ sĩ tử thần) "Danh dự trong cái chết cũng như trong cuộc sống!"`,
          describe: `Triệu hồi một Death Rider: một người lính kiên cường có hào quang tăng sát thương cho các bộ xương gần đó, Chiến binh cát của <b>Alric</b> và Golem xương của <b>Bonehart</b> tăng thêm 50% và cấp thêm 30% giáp. (Hồi sinh: 12 giây)`,
          table: `Level	Giá	HP	Damage	Giáp
        1	300 (270)	250	5-15	40%
        2	150 (135)	300	10-20	50%
        3	150 (135)	350	15-25	60%`,
        },
      ],
      achievements: [
        {
          name: "NECROPOLIS",
          imgFirst: "475CUOk",
          describe: `Có 20 lính xương hoạt động cùng lúc.`,
        },
        {
          name: "GRIM REAPER",
          imgFirst: "471DD2Z",
          describe: `Yêu cầu Death Knights của bạn lấy đi 99 mạng sống.`,
        },
      ],
    },
    "Battle-Mecha T200": {
      name: "Battle-Mecha T200",
      imgSmall: "472Q9iL",
      imgBig: "46Mbmhs",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Wasp Missiles",
          imgFirst: "3tE25sU",
          imgLast: "3tDiA8z",
          subName: `(Tên lửa Wasp) "Gắn thẻ chúng và phân mảnh chúng!"`,
          describe: `Bắn một loạt tên lửa tìm kiếm không bao giờ trượt, gây 20-80 sát thương mỗi tên lửa. ( Thời gian hồi chiêu: 8 giây / Thời gian hồi chiêu không bị ảnh hưởng bởi nâng cấp Gnomish Tinkering)`,
          table: `Level	Trị giá	Tên lửa
        1	300	2
        2	250	4`,
        },
        {
          name: "Waste Disposal",
          imgFirst: "474IYa4",
          imgLast: "3tE29c8",
          subName: `(Xử lý chất thải) "Xuống máng rác!"`,
          describe: `Nhỏ dầu xuống đất làm chậm kẻ địch 70%. ( Thời gian hồi chiêu: 10 giây / Với bản nâng cấp Gnomish Tinkering: 7 giây)`,
          table: `Level	Giá	Thời gian
        1	250	2s (4s trên Flash)
        2	200	4s (6s trên Flash)
        3	200	6s (8s trên Flash)`,
        },
      ],
      achievements: [
        {
          name: "MECHWARRIOR",
          imgFirst: "3tFxlHY",
          describe: `Xây dựng 3 mecha trên một màn bất kỳ.`,
        },
        {
          name: "OPTIMUS PRIME",
          imgFirst: "3tE2f3u",
          describe: `Giúp Mecha của bạn đánh bại 500 kẻ thù.`,
        },
      ],
    },
    // 10 Towers Special Frontiers
    "Legion Archer": {
      name: "Legion Archer",
      imgSmall: "3tS87Gl",
      link: "link",
      linkTitle: "text",
    },
    "Mercenary Camp": {
      name: "Mercenary Camp",
      imgSmall: "3FxerGc",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Legionnaire",
          imgFirst: "3s4xQLk",
          describe: `(Lính lê dương) "Những người lính tinh nhuệ được đào tạo bài bản, họ sống và chết vì vinh quang của trận chiến!"`,
          table: `Chi phí	HP	Damage	Tốc đánh	Giáp
        75 G	250	20-40	1.0s	None`,
        },
        {
          name: "Genie",
          imgFirst: "3Fws2gF",
          imgLast: "3FyTNFz",
          subName: `(Thần đèn) "Thần đèn là những sinh vật đáng gờm. Họ chiến đấu bằng ma thuật và nắm đấm nhưng lại yêu cầu rất nhiều vàng."`,
          describe: `Biến kẻ thù thành rương kho báu, ếch nhảy múa hoặc đàn hạc vàng ( Thời gian hồi chiêu: 15 giây )`,
          table: `Chi phí	HP	Damage	Tốc đánh	Giáp
        150 G	350	20-40	1.0s	None`,
        },
      ],
      achievements: [
        {
          name: "MONEY TALKS",
          imgFirst: "3QuQ5mp",
          describe: `Thuê mười lính đánh thuê trở lên.`,
        },
        {
          name: "STUFF 'O' MAKER",
          imgFirst: "3tN2TvK",
          describe: `Có một vị thần đèn đa hình 10 kẻ thù.`,
        },
      ],
    },
    "SCUMM Bar": {
      name: "SCUMM Bar",
      imgSmall: "494FqGy",
      imgBig: "link",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Corsair",
          imgFirst: "409Soyy",
          subName: `"Những chiến binh đáng gờm, họ thích chiến đấu và cướp bóc cho người trả giá cao nhất!"`,
          describe: `Corsair có 15% cơ hội cướp 2-5 vàng từ kẻ thù trong mỗi đòn tấn công.`,
          table: `Chi phí	HP	Damage	Tốc đánh	Giáp
        75 G	250	15-30	1.0s	None`,
          tableImg: "494FqGy",
        },
        {
          name: "Buccaneer",
          imgFirst: "3Q2CAJe",
          subName: `"Những tên Hải tặc này yêu thích món ăn của chúng và chỉ chia sẻ nó bằng cách đốt lửa và ném nó."`,
          describe: `Buccaneer tấn công tầm xa bằng cách nhổ từng ngụm rượu vào kẻ thù và đốt cháy chúng.`,
          table: `Chi phí	HP	Damage Gần| Xa	Tốc đánh Gần| Xa	Giáp
        150 G	125	15-30 | 20-30	1.0s | 1.5s	None`,
          tableImg: "3Fxi52y",
        },
        {
          name: "Boatswain",
          imgFirst: "3s74fAV",
          describe: `“Những con chó biển này thực sự có thể giữ vững lập trường của mình trong khi mang lại lợi ích lớn cho chiến trường.”`,
          table: `Chi phí	HP	Damage	Tốc đánh	Giáp
        130 G	600	20-40	2.0s	None`,
          tableImg: "45G6mt7",
        },
      ],
    },
    "Pirate Cpt.": {
      name: "Pirate Cpt.",
      imgSmall: "408ZVxC",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Cannonade",
          subName: `(Đại bác)`,
          describe: `Thuê đại bác cướp biển và nổ tung kẻ thù gây 60-120 sát thương mỗi phát cho kẻ địch trong phạm vi nhỏ.`,
          table: `1 shot\t 2 shots\t 3 shots\n 25 Gold\t 45 Gold\t 60 Gold`,
          tableImg: "3QdE5EL",
        },
      ],
      achievements: [
        {
          name: "THE BLACK PEARL",
          imgFirst: "3tRJ0n4",
          describe: `Tiêu diệt 30 kẻ thù bằng đại bác tàu cướp biển.`,
        },
      ],
    },
    "Spear Maiden": {
      name: "Spear Maiden",
      imgSmall: "3s8xkvV",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Whirlwind Attack",
          imgLast: "46YkIWS",
          subName: `(Tấn công cơn lốc) "Một bộ tộc nữ chiến binh kiêu hãnh sẵn sàng chiến đấu"`,
          describe: `Spear Maiden có 20% cơ hội gây sát thương 14-36 trong một khu vực nhỏ`,
          table: `Chi phí	HP	Damage	Tốc đánh	Giáp
        75 G	300	14-36	1.0s	None`,
        },
      ],
      achievements: [
        {
          name: "TWIST AND SHOUT",
          imgFirst: "3Qc5M0t",
          describe: `text`,
        },
      ],
    },
    "Dwarven Bastion": {
      name: "Dwarven Bastion",
      imgSmall: "3QaB4VB",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Explosive Keg",
          imgFirst: "3SkpYjo",
          subName: `(Thùng thuốc nổ) "TNT!... và tôi sẽ thắng cuộc chiến!"`,
          describe: `Ném một thùng thuốc nổ gây sát thương diện rộng. ( Thời gian hồi chiêu: 10 giây )`,
          table: `Level	Trị giá	Damage
        1	250	60-100
        2	150	80-160
        3	150	100-220`,
        },
        {
          name: "Full Mithril Jacket",
          imgFirst: "3Qbws1v",
          subName: `(Áo khoác Bí ngân) "Bảy sáu hai milimét...!"`,
          describe: `Tăng sát thương tấn công tầm xa thêm 30 trên mỗi lần nâng cấp.`,
          table: `Level	Trị giá	Damage với upgrade
        1	300	65-95
        2	150	95-125
        3	150	125-155`,
        },
      ],
    },
    "Dwarf Hall": {
      name: "Dwarf Hall",
      imgSmall: "475zwDo",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Mithril Armor",
          imgFirst: "3ScKFOc",
          subName: `(Giáp Bí ngân) "...cứng như vảy rồng!"`,
          describe: `Tăng áo giáp vật lý của người lùn.`,
          table: `Level	Chi phí	Giáp
        1	250	Medium (45%)
        2	100	High (70%)`,
        },
        {
          name: "Mithril Hammers",
          imgFirst: "3Sj2H1D",
          subName: `(Búa Bí ngân) "Nhẹ tựa lông hồng..."`,
          describe: `Tăng sát thương tấn công của người lùn thêm 5 trong mỗi lần nâng cấp.`,
          table: `Level	Chi phí	Damage sau upgrade
        1	200	17-23
        2	100	22-28
        3	100	27-33`,
        },
        {
          name: "Dwarfweiser",
          imgFirst: "3tM5WEm",
          imgLast: "3MhfEFg",
          subName: `("Wassuuuup!") `,
          describe: `Một thức uống ma thuật giúp hồi sinh 20 HP mỗi giây. ( Thời gian hồi chiêu: 10 giây )
        Họ chỉ uống nó khi HP của họ dưới 100.`,
          table: `Level	Chi phí	Khoảng thời gian
        1	250	3 giây
        2	150	5 giây
        3	150	7 giây`,
        },
      ],
      achievements: [
        {
          name: "OAKENSHIELD",
          imgFirst: "3Sfh4E8",
          describe: `Yêu cầu một người lính lùn chữa lành tổng cộng 500 mạng sống.`,
        },
      ],
    },
    "Pirate Watchtower": {
      name: "Pirate Watchtower",
      imgSmall: "3ScLAhS",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Rapid Reload",
          imgFirst: "3SfJsWu",
          subName: `(Tải lại nhanh) (Không có quý!)`,
          describe: `Cải thiện tốc độ tấn công của tháp thêm 30% mỗi lần nâng cấp.`,
          table: `Level	Trị giá	Tốc độ bắn
        1	75	Rất chậm (2,4 giây)
        2	75	Chậm (1,7 giây)
        3	75	Trung bình (1,2 giây)`,
        },
        {
          name: "Parrot Bomber",
          imgFirst: "3Sdvgxf",
          subName: `(Máy bay ném bom vẹt) (Polly muốn một chiếc bánh quy giòn!`,
          describe: `Huấn luyện vẹt ném bom gây sát thương từ 20 đến 40. ( Thời gian hồi chiêu: 2,5 giây )`,
          table: `Level	Trị giá	Số lượng vẹt
        1	350	1
        2	350	2`,
        },
      ],
    },
    "Shrine of Regnos": {
      name: "Shrine of Regnos",
      imgSmall: "3tRJdGS",
      link: "link",
      linkTitle: "text",
    },
    "Dark Forge": {
      name: "Dark Forge",
      imgSmall: "498sZcB",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Lightning Strike",
          imgFirst: "3tNviBX",
          subName: `(Sét đánh) (Đó là điện khí hóa!)`,
          describe: `Các tia sét gây sát thương và sẽ phóng tới các mục tiêu khác*.
        *: Gây 75% và 50% sát thương lần lượt cho mục tiêu bổ sung đầu tiên và các mục tiêu tiếp theo. Mô tả không chính xác khi nói rằng có thêm 1/2/4 mục tiêu.`,
          table: `Level	Trị giá	Damage	Mục tiêu bổ sung
        1	250	50-70	2
        2	150	60-80	3
        3	150	70-90	4`,
        },
        {
          name: "Flesh Golem",
          imgFirst: "3FCrypf",
          subName: `(Golem thịt) (Nó còn sống...)`,
          describe: `Animates Frankie, một cỗ máy tự động cao chót vót vô tâm tuân theo mệnh lệnh mà không cần thắc mắc. (Hồi sinh: 12 giây, Tốc độ hồi máu: 25 HP/s)Ở cấp độ 2, Frankie nhận được vũ khí Jaxx v2 mới. Ở cấp độ 3, Frankie nhận được một đòn tấn công diện rộng đặc biệt gây 150 sát thương vật lý. (Thời gian hồi chiêu: 6,5 giây)`,
          table: `Level	Frankie	Trị giá\t HP	Damage	Giáp
        1	imgArr	200	500\t 10-20 [2.0s]	Low (20%)
        2	imgArr	200	500\t 30-50 [1.0s]	Medium (40%)
        3	imgArr	200	500\t 30-50 [1.0s]	Medium (60%)`,
          imgArr: ["3FsrLvo", "40906cg", "40877di"],
        },
      ],
    },
    // 16 Heroes Frontiers
    Alric: {
      name: "Alric",
      imgSmall: "475zOtY",
      imgBig: "3Mhmcnb",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "SWORDSMANSHIP",
          imgFirst: "474podT",
          subName: `(Kiếm Thuật) (bị động) (1/2/3 điểm anh hùng)`,
          describe: `Cải thiện sát thương tấn công cơ bản của Alric thêm 2/4/6 điểm. Mỗi cấp độ sẽ tăng thêm sát thương lên trên cấp độ trước đó, tổng cộng thêm 2/6/12 sát thương.`,
        },
        {
          name: "SPIKED ARMOR",
          imgFirst: "3MeJCto",
          subName: `(Phản đòn) (bị động) (1/2/3 điểm anh hùng)`,
          describe: `Khi nhận sát thương, Alric sẽ phản lại 10%/30%/60% sát thương đó.`,
        },
        {
          name: "TOUGHNESS",
          imgFirst: "3s2murl",
          subName: `(Dẻo Dai) (bị động) (1/2/3 điểm anh hùng)`,
          describe: `Tăng HP của Alric thêm 30/60/90 điểm. Mỗi cấp độ sẽ tăng HP trên cấp độ trước đó, với tổng số HP tăng thêm là 30/90/180.`,
        },
        {
          name: "FLURRY",
          imgFirst: "3Mf5Ds0",
          imgLast: "3QwgfFF",
          subName: `(Kiếm vũ) (kích hoạt, thời gian hồi chiêu: 6 giây) (2/2/2 điểm anh hùng)`,
          describe: `Alric tạo ra một cơn bão kiếm tấn công đối thủ 2/4/6 lần liên tiếp.`,
        },
        {
          name: "SAND WARRIORS",
          imgFirst: "45NJmsl",
          imgLast: "3s7NeGY",
          subName: `(Chiến binh cát) (kích hoạt, thời gian hồi chiêu: 10 giây) (2/2/2 điểm anh hùng)`,
          describe: `Alric triệu hồi 1/2/3 chiến binh cát để hỗ trợ anh ta chiến đấu trong 8 giây.`,
          table:
            "Level\tHP\tDamage (1.0s)\tDamage (với Death Knight)\tGiáp\tGiáp (với Death Knight)\n1\t60\t2-6\t3-9\tNone\tLow\n2\t100\t2-6\t\t3-9\tNone\tLow\n3\t140\t2-6\t3-9\tNone\tLow",
          tableImg: "3Qyo6lO",
        },
      ],
      stats: `Level	HP (với Toughness)	Damage (1.0s) (với Swordsmanship)	Giáp	Hồi sinh
    1	245	6-10	Low (20%)	20s
    2	260<br/> (290/350)	7-12<br/>(9-14 / 13-18 / 19-23)	Low (25%)	20s
    3	275<br/>(305/365/455)	8-14<br/>(10-16 / 16-20 / 22-26)	Low (30%)	20s
    4	290<br/>(320/380/470)	9-16<br/>(11-18 / 15-22 / 21-28)	Medium (35%)	20s
    5	305<br/>(335/395/485)	10-18<br/>(12-20 / 16-24 / 22-30)	Medium (40%)	20s
    6	320<br/>(350/410/500)	11-20<br/>(13-22 / 17-26 / 23-32)	Medium (45%)	20s
    7	335<br/>(365/425/515)	12-22<br/>(14-26 / 18-30 / 24-36)	Medium (50%)	20s
    8	350<br/>(380/440/530)	13-24<br/>(15-26 / 19-30 / 25-36)	Medium (55%)	20s
    9	365<br/>(395/455/545)	14-26<br/>(16-28 / 20-32 / 26-38)	Medium (60%)	20s
    10	380<br/>(410/470/560)	15-28<br/>(17-30 / 21-34 / 27-40)	High (65%)	20s`,
    },
    Mirage: {
      name: "Mirage",
      imgSmall: "476F0h9",
      imgBig: "3tIdcBb",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "PRECISION",
          imgFirst: "3FxLWYE",
          subName: `(Chính xác) ( bị động ) (1/1/1 điểm anh hùng)`,
          describe: `Cải thiện phạm vi tấn công của Mirage thêm 10%/20%/30%.`,
        },
        {
          name: "SHADOW DODGE",
          imgFirst: "3S9WnZZ",
          imgLast: "3FtBAsS",
          subName: `(Mánh khoé bóng đêm) ( bị động ) (2/2/2 điểm anh hùng)`,
          describe: `Mirage có cơ hội né tránh là 20%/40%/60% và khi né tránh, để lại một bản sao của chính mình để chiến đấu trong 1 giây, bản sao này không có sát thương tấn công.`,
        },
        {
          name: "SWIFTNESS",
          imgFirst: "471BHI2",
          subName: `(Nhanh Nhẹn) ( bị động ) (1/1/1 điểm anh hùng)`,
          describe: `Tăng tốc độ di chuyển (2.4) của Mirage thêm 20%/ 40%/ 60%.`,
        },
        {
          name: "SHADOW DANCE",
          imgFirst: "3tFy8sq",
          imgLast: "45SI7by",
          subName: `(Vũ Điệu Bóng Tối) ( kích hoạt, thời gian hồi chiêu: 11 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Mirage triệu hồi 2/3/4 bản sao của cô ấy chạy và tấn công kẻ địch ở gần, gây 24/32/40 sát thương chuẩn cho mỗi bản sao rồi biến mất.`,
        },
        {
          name: "LETHAL STRIKE",
          imgFirst: "46GRQTf",
          imgLast: "45MI6G3",
          subName: `(Đòn đánh chết người) ( kích hoạt, thời gian hồi chiêu: 16 giây ) (4/4/4 điểm anh hùng)`,
          describe: `Mirage đâm sau lưng mục tiêu với 90/180/270 sát thương chuẩn với 10%/17%/25% cơ hội tiêu diệt ngay lập tức.`,
        },
      ],
      stats: `Level	HP	Hồi máu	Damage (1.0s)<br/>Damage Xa (0.6s)\t Giáp	Hồi sinh
    2	180	23	6-9 (6-9)	None	15s
    3	195	24	7-11 (7-10)	None	15s
    4	210	26	8-13 (8-12)	None	15s
    5	225	28	10-14 (9-13)	None	15s
    6	240	30	11-16 (10-14)	None	15s
    7	255	32	12-18 (11-16)	None	15s
    8	270	34	13-20 (12-17)	None	15s
    9	285	36	14-22 (12-19)	None	15s
    10	300	38	16-23 (13-20)	None	15s`,
    },
    Cronan: {
      name: "Cronan",
      imgSmall: "46YinMh",
      imgBig: "46OnNZZ",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "BOARMASTER",
          imgFirst: "46GGwXp",
          imgLast: "49an8Uc",
          subName: `(Thú Vương) ( chủ động, hồi sinh: 18 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Cronan triệu hồi 1/2/2 con lợn rừng để chiến đấu với kẻ địch. Lợn rừng hồi phục 10 HP mỗi giây khi không hoạt động. (họ bị ảnh hưởng bởi việc nâng cấp Courage.)`,
          table: `Level	HP	Damage (2.0s)	Giáp
        1	160	2-8	None
        2	160	2-8	None
        3	240	2-8	None`,
          tableImg: "3FxiMca",
        },
        {
          name: "STAMPEDE",
          imgFirst: "494G3jo",
          imgLast: "45JGYTA",
          subName: `(Dẫm Đạp) ( chủ động, thời gian hồi chiêu: 26 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Cronan kêu gọi một đàn tê giác gồm 2/3/4 lao qua con đường trên mặt đất, mỗi con tê giác gây 15 sát thương cho kẻ địch bị bắt trên đường đi của nó. Do hộp sát thương của tê giác nên số lượng tê giác tấn công kẻ thù có thể thay đổi. Nó có khả năng làm choáng 25%/30%/35% đối với mọi kẻ địch bị bắt trên đường đi của nó. <br/>
        Trên phiên bản Flash, nó gây sát thương 20/30/40 cho mỗi con tê giác - tổng sát thương là 40/90/160.`,
        },
        {
          name: "FALCONER",
          imgFirst: "3QaR7mv",
          subName: `(Luyện Chim) ( bị động ) (1/2/3 điểm anh hùng)`,
          describe: `Cronan huấn luyện một người bạn chim ưng đồng hành tấn công kẻ thù.`,
          table: `Level	Damage (3.5s)
        1	3-9
        2	9-27
        3	18-54`,
          tableImg: "3tLmnRr",
        },
        {
          name: "DEEP LASHES",
          imgFirst: "3Qd4O48",
          imgLast: "409T4E6",
          subName: `(Vết thương Sâu) ( chủ động, thời gian hồi chiêu: 9 giây ) (1/2/3 điểm anh hùng)`,
          describe: `Đòn tấn công của Cronan gây 14/24/36 sát thương và làm chảy máu mục tiêu với 12/36/72 sát thương chuẩn trong 6 giây.`,
        },
        {
          name: "REGENERATION",
          imgFirst: "3QaBuLF",
          imgLast: "link",
          subName: `(Tái Sinh) ( thụ động ) (2/2/2 điểm anh hùng)`,
          describe: `Cronan phục hồi 3/6/9 điểm máu mỗi giây, bất kể trong chiến đấu hay không.`,
        },
      ],
      stats: `Level	HP	Damage (1.0s)	Giáp	Hồi sinh
    4	370	10-16	None	20s
    5	400	11-17	None	20s
    6	430	12-18	None	20s
    7	460	13-19	None	20s
    8	490	14-20	None	20s
    9	520	14-22	None	20s
    10	550	15-23	None	20s`,
    },
    Bruxa: {
      name: "Bruxa",
      imgSmall: "3MeUgQN",
      imgBig: "3ScLjv6",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "LAUGHING SKULLS",
          imgFirst: "3Sd9qdp",
          subName: `(Đầu Lâu Bay) ( bị động ) (2/2/2 điểm anh hùng)`,
          describe: `Đầu lâu bay của Bruxa gây thêm 50% (2)/100% (4)/150% (6) sát thương phép trên mỗi đòn tấn công.`,
        },
        {
          name: "SKULL SACRIFICE",
          imgFirst: "3QFpweJ",
          subName: `(Hy Sinh Đầu Lâu) ( chủ động ) (2/2/2 điểm anh hùng)`,
          describe: `Ném những chiếc đầu lâu đã cạn kiệt, gây 18/36/54 sát thương vật lý cho một kẻ địch. Trên iOS khả năng này gây sát thương phép thuật.`,
        },
        {
          name: "BONE DANCE",
          imgFirst: "3Sh6bBx",
          imgLast: "49aRiXF",
          subName: `(Vũ Điệu Xương) ( bị động ) (2/2/2 điểm anh hùng)`,
          describe: `Tăng số lượng đầu lâu hoạt động của Bruxa tối đa lên 3/4/5.`,
        },
        {
          name: "DREAD AURA",
          imgFirst: "3tIdA2B",
          imgLast: "3S8Rlx1",
          subName: `(Hào Quang Đáng Sợ) ( bị động ) (1/1/1 điểm anh hùng)`,
          describe: `Bruxa làm chậm tất cả kẻ địch xung quanh đi 10%/20%/30% và gây sát thương nhẹ cho chúng. (1 sát thương mỗi giây)`,
        },
        {
          name: "VOODOO DOLL",
          imgFirst: "3tRJN7w",
          imgLast: "3SkqWMy",
          subName: `(Búp Bê Voodoo) ( chủ động ) (3/3/3 điểm anh hùng) (thời gian hồi chiêu: 20 giây)`,
          describe: `Đâm một con búp bê voodoo, gây 40/80/120 sát thương chuẩn cho 5 kẻ địch cùng loại với mục tiêu. Điều này cũng làm chậm kẻ địch bị nó tấn công trong khoảng 80% (0,5 giây) và không cộng dồn với Hào quang Dread.`,
        },
      ],
      stats: `Level	HP	Damage Gần (1.0s) Xa (1.5s)	Giáp	Hồi sinh
    4	230	8-25	None	15s
    5	250	10-29	None	15s
    6	270	11-34	None	15s
    7	290	13-39	None	15s
    8	310	14-43	None	15s
    9	330	16-47	None	15s
    10	350	17-52	None	15s`,
    },
    "Captain Blackthorne": {
      name: "Captain Blackthorne",
      imgSmall: "4951GA5",
      imgBig: "498tCmt",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "SWORDSMANSHIP",
          imgFirst: "3rWrYE5",
          subName: `(Kiếm Thuật)( bị động ) (1/2/3 điểm anh hùng)`,
          describe: `Tăng sát thương tấn công của Blackthorne thêm 3/6/9.`,
        },
        {
          name: "LOOTING",
          imgFirst: "3SeLUg6",
          subName: `(Cướp Bóc) ( bị động ) (2/2/2 điểm anh hùng)`,
          describe: `Kẻ địch bị tiêu diệt ở gần Blackthorne sẽ nhận thêm 10%/20%/30% vàng. (phạm vi: 180)`,
        },
        {
          name: "TOUGHNESS",
          imgFirst: "3Sh6iwX",
          subName: `(Độ Dẻo Dai) ( bị động ) (1/1/1/ điểm anh hùng)`,
          describe: `Tăng máu của Blackthorne thêm 30/60/90.`,
        },
        {
          name: "RUM AND BANG",
          imgFirst: "47mzeYX",
          imgLast: "473c89r",
          subName: `( kích hoạt ) (thời gian hồi chiêu: 12 giây) (2/2/2 điểm anh hùng)`,
          describe: `Ném một thùng thuốc nổ với 4/6/8 vụ nổ, mỗi vụ nổ có lực 12/14/15 sát thương.`,
        },
        {
          name: "RELEASE THE KRAKEN",
          imgFirst: "46UJBmq",
          imgLast: "3s751Ol",
          subName: `(Hãy thả Kraken ra) ( kích hoạt ) (thời gian hồi chiêu: 17 giây) (3/3/3 điểm anh hùng)`,
          describe: `Triệu hồi Kraken trong 3 giây, bẫy tối đa 4/5/6 (3/4/5 trên iOS) kẻ thù và gây 9 sát thương mỗi giây đồng thời làm chậm kẻ khác 25%/50%/75%.`,
        },
      ],
      stats: `Level	HP	Damage (1.0s)	Damage Xa	Giáp	Hồi máu	Hồi sinh
    4	300 (480)	12-22 (30-40)	35-66	None	29 (48)	20s
    5	325 (505)	13-25 (31-43)		None	32 (50)	20s
    6	350 (530)	15-28 (33-46)		None	35 (53)	20s
    7	375 (555)	17-31 (35-49)		None	37 (55)	20s
    8	400 (580)	18-34 (36-52)		None	40 (58)	20s
    9	425 (605)	20-37 (38-55)		None	42 (60)	20s
    10	450 (630)	22-41 (40-59)	76-142	None	45 (63)	20s`,
    },
    Nivus: {
      name: "Nivus",
      imgSmall: "473cblD",
      imgBig: "3s4mQxt",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "MAGIC MISSILE",
          imgFirst: "3QuRaut",
          imgLast: "3FyUMWh",
          subName: `(Tên Lửa Ma Thuật) ( chủ động ) (thời gian hồi chiêu: 12 giây) (1/2/3 điểm anh hùng)`,
          describe: `Nivus phóng 3/5/7 tên lửa ma thuật dẫn đường không bao giờ trượt và gây sát thương 12/18/24 mỗi tên lửa.`,
        },
        {
          name: "CHAIN SPELL",
          imgFirst: "3QuyD1p",
          subName: `(Chuỗi Phép) ( chủ động ) (thời gian hồi chiêu: 6 giây) (2/2/2 điểm anh hùng)`,
          describe: `Bắn một tia thông thường xuyên qua thêm 2/3/4 kẻ địch.`,
        },
        {
          name: "DISINTEGRATE",
          imgFirst: "3QtdzIQ",
          imgLast: "3MeUszv",
          subName: `(Tan rã) ( chủ động ) (thời gian hồi chiêu: 25 giây) (3/3/3 điểm anh hùng)`,
          describe: `Nivus tiêu diệt kẻ địch trong phạm vi có tổng máu từ 170/330/480 trở xuống.`,
        },
        {
          name: "ARCANE REACH",
          imgFirst: "3FtC81U",
          subName: `( bị động ) (1/1/1 điểm anh hùng)`,
          describe: `Tăng phạm vi tấn công của Nivus thêm 10/20/30 phần trăm.`,
        },
        {
          name: "ARCANE FOCUS",
          imgFirst: "3MeM2IE",
          subName: `( bị động ) (1/2/3 điểm anh hùng)`,
          describe: `Tăng sát thương tấn công của Nivus thêm 2/4/6 điểm.`,
        },
      ],
      stats: `Level	HP	Damage Xa 1.5s | Gần 1s (với Arcane Focus)	Giáp	Hồi máu	Hồi sinh
    4	160	14-41<br/> (16-43 / 20-47 / 26-53)	None	16	18s
    5	175	15-45<br/> (17-47 / 21-51 / 27-57)	None	18	18s
    6	190	17-50<br/> (19-52 / 23-56 / 29-62)	None	19	18s
    7	205	18-54<br/> (20-56 / 24-60 / 30-66)	None	21	18s
    8	220	20-59<br/> (22-61 / 26-65 / 32-71)	None	22	18s
    9	235	21-63<br/> (23-65 / 27-69 / 33-75)	None	24	18s
    10	250	23-68<br/> (25-70 / 29-74 / 35-80)	None	25	18s`,
    },
    Dierdre: {
      name: "Dierdre",
      imgSmall: "3QuVASf",
      imgBig: "3s4n3Rh",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "HOLY LIGHT",
          imgFirst: "45SIKlq",
          imgLast: "3s2xe97",
          subName: `(Đền Thánh) ( kích hoạt ) (thời gian hồi chiêu: 6 giây) (1/2/3 điểm anh hùng)`,
          describe: `Hồi máu ảnh hưởng đến tối đa 2/3/4 đồng minh, Dierdre hồi máu cho mỗi người 25/50/75 HP, với 10%/20%/30% cơ hội hồi sinh những người đã ngã xuống. Không bao gồm Death Rider, tay sai bộ xương, Frankie.`,
        },
        {
          name: "CONSECRATE",
          imgFirst: "3FyV4MR",
          imgLast: "45LrBtu",
          subName: `(Dâng Hiến) ( kích hoạt ) (thời gian hồi chiêu: 8 giây) (2/2/3 điểm anh hùng)`,
          describe: `Dierdre cung cấp cho tháp phần thưởng sát thương 15%/20%/25% trong 6/10/14 giây.`,
        },
        {
          name: "WINGS OF LIGHT",
          imgFirst: "45KaBnF",
          imgLast: "45G7kFL",
          subName: `(Đôi Cánh Thiên Thần) ( kích hoạt ) (3/1/1 điểm anh hùng)`,
          describe: `Cho phép Dierdre dịch chuyển tức thời đồng thời ban phước cho áo giáp (+20%) của đồng minh trong 10/20/30 giây.`,
        },
        {
          name: "BLESSED ARMOR",
          imgFirst: "45LMVPC",
          subName: `(Giáp Phước) ( bị động ) (2/2/2 điểm anh hùng)`,
          describe: `Cải thiện chỉ số giáp của Dierdre lên Low (25%) / Medium (50%) / Hight (75%).`,
        },
        {
          name: "DIVINE HEALTH",
          imgFirst: "3QvaV5a",
          subName: `(Sức Khoẻ Thiên Chúa) ( bị động ) (1/2/3 điểm anh hùng)`,
          describe: `Tăng sinh mệnh của Dierdre thêm 30/60/90 điểm.`,
        },
      ],
      stats: `Level	HP	Damage Xa (1.4s) Damage Gần (1.0s)	Giáp	Hồi sinh
    4	240<br/>(270-330-420)\t 6-19	None	15s
    5	260<br/>(290-350-440)\t 7-21	None	15s
    6	280<br/>(310-370-460)\t 8-23	None	15s
    7	300<br/>(330-390-480)\t 9-26	None	15s
    8	320<br/>(350-410-500)\t 10-28	None	15s
    9	340<br/>(370-430-520)\t 11-30	None	15s
    10	360<br/>(390-450-540)\t 11-32	None	15s`,
    },
    Grawl: {
      name: "Grawl",
      imgSmall: "3QuRsBz",
      imgBig: "3Quz1Np",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "BOULDER THROW",
          imgFirst: "4951KQl",
          imgLast: "471Cmcu",
          subName: `(Ném Tảng Đá) ( kích hoạt ) (thời gian hồi chiêu: 12 giây) (2/2/2 điểm anh hùng)`,
          describe: `Grawl ném một tảng đá khổng lồ vào kẻ địch, gây sát thương 20-40/40-60/60-100 cho mục tiêu và kẻ địch ở gần.`,
        },
        {
          name: "STOMP",
          imgFirst: "3tIdJDb",
          imgLast: "45MP9yr",
          subName: `(Dậm Chân) ( kích hoạt ) (thời gian hồi chiêu: 14 giây) (2/2/2 điểm anh hùng)`,
          describe: `Grawl đập xuống đất 4/6/8 lần, gây 16 sát thương mỗi đòn, làm chậm và làm choáng kẻ địch trong 2/3/4-5 giây.`,
        },
        {
          name: "BASTION",
          imgFirst: "46KDb9C",
          imgLast: "3tM70YS",
          subName: `(Pháo Đài) ( bị động ) (1/1/1 điểm anh hùng)`,
          describe: `Grawl dần dần nhận thêm tối đa 6/12/18 sát thương khi giữ vững vị trí. Sau khi đạt được, anh ta sẽ giữ lại nó trừ khi di chuyển ra ngoài bán kính 100 từ mình cùng một lúc.`,
        },
        {
          name: "SHARD PUNCH",
          imgFirst: "494xLIf",
          imgLast: "45G7HjD",
          subName: `( kích hoạt ) (thời gian hồi chiêu: 12 giây) (3/3/3 điểm anh hùng)`,
          describe: `Grawl gây 60/120/180 sát thương chuẩn với 10%/20%/30% cơ hội tiêu diệt ngay lập tức nếu máu của Grawl tăng gấp ba lần mục tiêu.  (Shard Punch thực sự gây thêm sát thương cộng thêm ngoài sát thương cơ bản, trong trường hợp này nó cũng gây sát thương chuẩn - không bao gồm tiền thưởng từ Bastion.)`,
        },
        {
          name: "HARD ROCK",
          imgFirst: "3tJDAL0",
          subName: `(Đá Cứng) ( bị động ) (1/2/3 điểm anh hùng)`,
          describe: `Tăng HP của Grawl thêm 50/100/150 điểm.`,
        },
      ],
      stats: `Level	HP	Damage (1.3s)	Giáp	Hồi máu	Hồi sinh
    5	450	17-25	Medium (35%)	23	25s
    6	480	18-27	Medium (38.5%)	24	25s
    7	510	20-30	Medium (41.5%)	26	25s
    8	540	21-32	Medium (44%)	27	25s
    9	570	22-34	Medium (47.5%)	29	25s
    10	600	24-37	Medium (50%)	30	25s`,
    },
    "Sha'tra": {
      name: "Sha'tra",
      imgSmall: "3Q2DJ3u",
      imgBig: "46KamKH",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "ENERGY GLAIVE",
          imgFirst: "46ArQJj",
          imgLast: "3QdF9bJ",
          subName: `(Năng lượng Glaive) ( kích hoạt ) (thời gian hồi chiêu: 7 giây) (2/2/2 điểm anh hùng)`,
          describe: `Sha'tra ném một mũi đao gây sát thương chuẩn 22/30/35 và có 30%/40%/50% cơ hội nảy sang mục tiêu khác (lần nảy thứ hai trở đi). Lần nảy đầu tiên được đảm bảo miễn là có một mục tiêu khác hiện diện.`,
        },
        {
          name: "PURIFICATION PROTOCOL",
          imgFirst: "46VGGdm",
          imgLast: "491kKPL",
          subName: `(Quy trình làm sạch)( kích hoạt ) (thời gian hồi chiêu: 16 giây) (2/2/2 điểm anh hùng)`,
          describe: `Sha'tra triệu hồi một máy bay không người lái gây sát thương chuẩn 80/160/240 trong 1/2/3 giây.`,
        },
        {
          name: "ABDUCTION",
          imgFirst: "46Iwntj",
          imgLast: "3FCsvOl",
          subName: `(Bắt cóc) ( kích hoạt ) (thời gian hồi chiêu: 25 giây) (3/4/4 điểm anh hùng)`,
          describe: `Bắt ngẫu nhiên tối đa 1/2/3 mẫu vật (hoặc bất kỳ kẻ thù nào ở Cấp 3) với tổng số mạng lên tới 250/600/1000.`,
        },
        {
          name: "VIBRO BLADES",
          imgFirst: "3Fw1JY5",
          subName: `(Lưỡi dao vibro) ( bị động ) (2/1/1 điểm anh hùng)`,
          describe: `ăng sát thương tấn công của Sha'tra thêm 5/5/5 điểm và bỏ qua áo giáp.`,
        },
        {
          name: "FINAL COUNTDOWN",
          imgFirst: "3QuIWSf",
          imgLast: "495gqyR",
          subName: `(Đếm ngược cuối cùng) ( bị động ) (1/1/1 điểm anh hùng)`,
          describe: `Khi chết, Sha'tra phát nổ gây sát thương chuẩn 100/160/220 diện rộng.`,
        },
      ],
      stats: `Level	HP	Damage (1.0s) (Với Vibro Blades)\tGiáp	Hồi máu	Hồi sinh
    6	320	15-25<br/> (20-30) (25-35) (30-40)\t Low (28%)	27	25s
    7	340	16-27<br/> (21-32) (26-37) (31-42)\t Low (31.5%)	28	25s
    8	360	18-30<br/> (23-35) (28-40) (33-45)\t Medium (34.5%)	30	25s
    9	380	20-32<br/> (25-37) (30-42) (35-47)\t Medium (37.5%)	32	25s
    10	400	22-34<br/> (27-39) (32-44) (37-49)\t Medium (40%)	33	25s`,
    },
    Karkinos: {
      name: "Karkinos",
      imgSmall: "499bh9a",
      imgBig: "3FtCyFw",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "IRON PINCER",
          imgFirst: "3Q9cVPe",
          subName: `( bị động ) (2/2/3 điểm anh hùng)`,
          describe: `Cải thiện sát thương tấn công cơ bản của Karkinos thêm 5/10/20 điểm.`,
        },
        {
          name: "BATTLE HARDENED",
          imgFirst: "497zA75",
          imgLast: "3QaSmlF",
          subName: `( bị động ) (2/1/1 điểm anh hùng)`,
          describe: `Nếu bị tấn công khi còn dưới 40% máu, Karkinos có 35%/50%/65% cơ hội trở nên bất tử trong 4 giây.`,
        },
        {
          name: "PINCER ATTACK",
          imgFirst: "47154tU",
          imgLast: "407aktL",
          subName: `(Tấn công gọng kìm) ( kích hoạt, thời gian hồi chiêu: 8 giây ) (3/3/3 điểm anh hùng)`,
          describe: `Karkinos bắn một gọng kìm cơ học gây 15/25/50 đến 35/75/100* Sát thương chuẩn lên kẻ địch trên một đường thẳng. Kỹ năng này thực sự gây ra khoảng 100-200 sát thương chuẩn ở mức tối đa.`,
        },
        {
          name: "SHOULDER CANNON",
          imgFirst: "409IBsh",
          imgLast: "40dMY5U",
          subName: `(Pháo vai) ( kích hoạt, hồi chiêu: 10 giây ) (2/2/3 điểm anh hùng)`,
          describe: `Karkinos bắn ra một tia keo nước gây 30/45/70 sát thương vật lý và làm chậm kẻ địch 40%/50%/60% trong 4/5/8 giây.`,
        },
        {
          name: "BURROW",
          imgFirst: "46Yllj6",
          imgLast: "4091hsc",
          subName: `(Hang Sóc) ( bị động ) (1/1/1 điểm anh hùng)`,
          describe: `Cho Karkinos khả năng di chuyển nhanh hơn 60%/120%/180% dưới mặt đất. (tốc độ cơ bản: 1,9, tốc độ Hang Sóc: 2,7/3,2/4,0)`,
        },
      ],
      stats: `Level	HP	Damage (1.2s)	Giáp	Hồi sinh
    5	400	10-29 (15-34 / 20-39 / 30-49)	Low (25.5%)	20s
    6	420	11-32 (16-37 / 21-42 / 31-52)	Low (27.5%)	20s
    7	440	11-34 (16-39 / 21-44 / 31-54)	Low (29.5%)	20s
    8	460	12-37 (17-42 / 22-47 / 32-57)	Low (31.5%)	20s
    9	480	13-40 (18-45 / 23-50 / 33-60)	Low (33.5%)	20s
    10	500	14-42 (19-47 / 24-52 / 34-62)	Medium (35%)	20s`,
    },
    Kutsao: {
      name: "Kutsao",
      imgSmall: "40cwU40",
      imgBig: "3MbXtRe",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "SNAKE STYLE",
          imgFirst: "3MgDgtt",
          imgLast: "3McSSOA",
          subName: `(PHONG CÁCH RẮN) ( kích hoạt ) (thời gian hồi chiêu: 15 giây) (2/2/2 điểm anh hùng)`,
          describe: `Đòn tấn công của Kutsao gây đau đớn tê liệt, gây 40/60/80 sát thương vật lý và khiến nạn nhân gây ít sát thương hơn 20% / 40% / 60% trong mỗi đòn tấn công, ngoại trừ đòn tấn công tiêu diệt ngay lập tức.`,
        },
        {
          name: "DRAGON STYLE",
          imgFirst: "3SdPsPM",
          imgLast: "46KZKuS",
          subName: `(PHONG CÁCH RỒNG) ( kích hoạt ) (thời gian hồi chiêu: 16 giây) (3/3/3 điểm anh hùng)`,
          describe: `Kutsao biến Chi của mình thành một con rồng lửa, gây sát thương chuẩn 25-75/40-120/80-160 cho kẻ địch xung quanh.`,
        },
        {
          name: "TIGER STYLE",
          imgFirst: "3Q4Cscm",
          imgLast: "3MhmXwx",
          subName: `(PHONG CÁCH HỔ) ( kích hoạt ) (thời gian hồi chiêu: 9 giây) (1/1/1 điểm anh hùng)`,
          describe: `Tập trung Khí của mình, Kutsao thực hiện đòn tấn công xuyên giáp, gây 30/50/70 sát thương chuẩn cho một kẻ địch.`,
        },
        {
          name: "LEOPARD STYLE",
          imgFirst: "46As9Ut",
          imgLast: "3SdCmBL",
          subName: `(PHONG CÁCH BÁO) ( kích hoạt ) (thời gian hồi chiêu: 10 giây) (2/2/2 điểm anh hùng)`,
          describe: `Kutsao tung ra 3/5/7 đòn tấn công nhanh như chớp lên nhiều mục tiêu, gây 10-30/12-36/14-42 sát thương chuẩn cho mỗi mục tiêu.`,
        },
        {
          name: "CRANE STYLE",
          imgFirst: "409TMRM",
          imgLast: "3rXX4v1",
          subName: `(PHONG CÁCH HẠC) ( bị động ) (2/2/2 điểm anh hùng)`,
          describe: `Mang lại cho Kutsao cơ hội né tránh 20%/40%/60% và khả năng phản công với 20/40/60 sát thương vật lý.`,
        },
      ],
      stats: `Level	HP	Damage (1.0s)	Giáp	Hồi sinh
    5	300	16-24	None	18s
    6	320	18-26	None	18s
    7	340	19-29	None	18s
    8	360	21-31	None	18s
    9	380	22-34	None	18s
    10	400	24-36	None	18s`,
    },
    Dante: {
      name: "Dante",
      imgSmall: "3Sd9Ss7",
      imgBig: "3SdYlsq",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "AKIMBO STYLE",
          imgFirst: "408Bf8u",
          imgLast: "3Skrp1g",
          subName: `(Phong cách Akimbo) ( kích hoạt ) (thời gian hồi chiêu: 18 giây) (2/2/2 điểm anh hùng)`,
          describe: `Dante rút 2 khẩu súng của mình ra và thực hiện 4/6/8 phát bắn nhanh, gây 40 sát thương mỗi khẩu.`,
        },
        {
          name: "SILVER BULLET",
          imgFirst: "3SkruC6",
          imgLast: "3QulANv",
          subName: `(Viên đạn bạc) ( kích hoạt ) (thời gian hồi chiêu: 15 giây) (3/3/3 điểm anh hùng)`,
          describe: `Dante nhắm mục tiêu và bắn một viên đạn bạc gây sát thương chuẩn 140/230/320. (Gây sát thương gấp đôi cho <b>Werewolf</b> và <b>Lycan</b> ở dạng sói.)`,
        },
        {
          name: "HOLY GRENADE",
          imgFirst: "3QuVRof",
          imgLast: "3QvPtNw",
          subName: `(Lọ nước thần thánh) ( kích hoạt ) (thời gian hồi chiêu: 15 giây) (2/2/2 điểm anh hùng)`,
          describe: `Dante ném một bình nước thánh khiến kẻ địch bị câm lặng, vô hiệu hóa mọi kỹ năng của chúng trong 5/10/15 giây.`,
        },
        {
          name: "RELIC OF POWER",
          imgFirst: "3QvhZyV",
          imgLast: "4943edv",
          subName: `(Di tích quyền lực) ( kích hoạt ) (thời gian hồi chiêu: 18 giây) (2/2/2 điểm anh hùng)`,
          describe: `Dante giải phóng sức mạnh của một thánh tích có khả năng tiêu diệt 25/50/100% khả năng kháng cự của mục tiêu. Hiệu quả là vĩnh viễn.`,
        },
        {
          name: "BEACON OF LIGHT",
          imgFirst: "3MeUQOt",
          imgLast: "3MhgPoa",
          subName: `(Ánh trăng dẫn lối) ( bị động ) (1/1/1 điểm anh hùng)`,
          describe: `Sự hiện diện của Dante ngay cả khi chết, sẽ ban phước cho các đồng minh ở gần và tăng thêm 15/30/50% sát thương cho họ. Nâng cấp kỹ năng này cũng cho phép Dante di chuyển ngay cả khi đã chết và do đó chọn điểm hồi sinh của mình.`,
        },
      ],
      stats: `Level	HP	Damage Gần (1.0s) Xa (1.5s)	Giáp	Hồi máu	Hồi sinh
    5	375	28-41	None	34	15s
    6	400	31-47	None	36	15s
    7	425	35-52	None	39	15s
    8	450	38-58	None	41	15s
    9	475	42-63	None	43	15s
    10	500	46-68	None	45	15s`,
    },

    Kahz: {
      name: "Kahz",
      imgSmall: "40c53RI",
      imgBig: "40bG3tL",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "BULL RUSH",
          imgFirst: "3s93TK7",
          imgLast: "407cYQd",
          subName: `(Cuộc đua bò) (2/2/2 điểm anh hùng) (thời gian hồi chiêu: 11 giây)`,
          describe: `Kahz lao về phía kẻ địch, làm choáng tất cả kẻ địch trên đường đi của hắn trong 2/3/4 giây và gây sát thương 10-20/15-35/20-50.`,
        },
        {
          name: "BLOOD AXE",
          imgFirst: "3tQoNhO",
          imgLast: "407zRTJ",
          subName: `(Rìu Máu) (1/1/1 điểm anh hùng) (thụ động)`,
          describe: `Mỗi đòn tấn công của Kahz có 10%* cơ hội gây sát thương chuẩn gấp đôi/ gấp ba/ gấp bốn. Mô tả trong Game ghi không chính xác là 20%.`,
        },
        {
          name: "DAEDALUS' MAZE",
          imgFirst: "3tJG6kq",
          imgLast: "46J5FAM",
          subName: `(Mê cung Daedalus) (2/2/2 điểm anh hùng) (thời gian hồi chiêu: 16 giây)`,
          describe: `Kahz dịch chuyển kẻ địch gần lối ra nhất với anh ta, làm choáng nó trong 2/4/6 giây.`,
        },
        {
          name: "ROAR OF FURY",
          imgFirst: "3MhcfGy",
          imgLast: "3Mhcmls",
          subName: `(Tiếng gầm giận dữ) (3/3/3 điểm anh hùng) (thời gian hồi chiêu: 30 giây)`,
          describe: `Kahz gầm lên, khiến mọi tháp gây thêm 25%/50%/75% sát thương trong 4 giây.`,
        },
        {
          name: "DOOM SPIN",
          imgFirst: "3tNGYof",
          imgLast: "49aPPQT",
          subName: `(Vòng quay diệt vong) (2/2/2 điểm anh hùng) (thời gian hồi chiêu: 16 giây)`,
          describe: `Kahz thực hiện đòn tấn công theo hướng lốc xoáy, gây sát thương 16-48/ 32-96/ 48-144.`,
        },
      ],
      stats: `Level	HP	Damage (1.0s)	Giáp	Hồi máu	Hồi sinh
    5	425	23-43	Low (25.5%)	30	20s
    6	450	25-47	Low (28%)	32	20s
    7	475	27-51	Low (31.5%)	34	20s
    8	500	29-55	Medium (34.5%)	36	20s
    9	525	32-59	Medium (37.5%)	38	20s
    10	550	34-62	Medium (40%)	39	20s`,
    },

    Saitam: {
      name: "Saitam",
      imgSmall: "494JmqO",
      imgBig: "49aPJJ1",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "SPINNING POLE",
          imgFirst: "3rYmFnA",
          imgLast: "3tLpGIl",
          subName: `(Cột quay) (3/3/3 điểm anh hùng) (thời gian hồi chiêu: 20 giây)`,
          describe: `Saitam xoay đôi Tetsubo của mình, gây 32/69/108 sát thương vật lý cho tất cả kẻ địch xung quanh. Yêu cầu tối thiểu 2 mục tiêu để kích hoạt.`,
        },
        {
          name: "TETSUBO STORM",
          imgFirst: "3tLpQiV",
          imgLast: "3SbONy0",
          subName: `(Bão Tetsubo) (2/2/2 điểm anh hùng) (thời gian hồi chiêu: 20 giây)`,
          describe: `Với một loạt đòn đánh nhanh và mạnh, Saitam gây 110/ 180/ 260 sát thương vật lý cho kẻ địch.`,
        },
        {
          name: "MONKEY PALM",
          imgFirst: "494AGkb",
          imgLast: "494GEl9",
          subName: `(Cây cọ khỉ) (1/1/1 điểm anh hùng) (thời gian hồi chiêu: 15 giây)`,
          describe: `Với một kỹ thuật cổ xưa, Saitam làm choáng kẻ địch trong 1/2/3 giây và làm chúng im lặng trong 5/10/15 giây.`,
        },
        {
          name: "ANGRY GOD",
          imgFirst: "3Q8ANTi",
          imgLast: "3seCt5v",
          subName: `(Chúa giận dữ) (2/2/2 điểm anh hùng) (thời gian hồi chiêu: 45 giây)`,
          describe: `Saitam kêu gọi Cơn thịnh nộ thần thánh của anh ta, tất cả kẻ thù nhận thêm 25% / 45% / 65% sát thương trong 5 giây (6 giây trên Steam/Android). Yêu cầu ít nhất 5 mục tiêu để kích hoạt, không bao gồm Boss, mini Boss.<br/>Trong khi niệm chú, anh ta không thể tấn công kẻ thù nhưng vẫn có thể bị nhắm mục tiêu.`,
        },
        {
          name: "DIVINE NATURE",
          imgFirst: "3s4wOiw",
          subName: `(THIÊN PHƯỚC) (1/2/3 điểm anh hùng) ( bị động )`,
          describe: `Truyền năng lượng thần thánh của mình, Saitam nhận được 3/6/9 khả năng hồi phục sinh lực mỗi giây.`,
        },
      ],
      stats: `Level	HP	Damage (1.0s)	Giáp	Hồi sinh
    5	300	14-26	Low (30%)	20s
    6	320	15-29	Low (33.5%)	20s
    7	340	16-31	Medium (36%)	20s
    8	360	18-34	Medium (39.5%)	20s
    9	380	20-36	Medium (42.5%)	20s
    10	400	21-39	Medium (45%)	20s`,
    },
    Ashbite: {
      name: "Ashbite",
      imgSmall: "497lBhK",
      imgBig: "498BwfJ",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "BLAZING BREATH",
          imgFirst: "409Ln0F",
          subName: `(Hơi thở rực lửa) ( kích hoạt ) (thời gian hồi chiêu: 10 giây) (2/2/2 điểm anh hùng)`,
          describe: `Ashbite phun ra một ngọn lửa hình nón gây 28/42/56 sát thương cho kẻ địch bị dính vào nó.`,
        },
        {
          name: "FEAST",
          imgFirst: "3ScNYoA",
          subName: `(Lễ hội) ( kích hoạt ) (thời gian hồi chiêu: 30 giây) (3/2/2 điểm anh hùng)`,
          describe: `Ashbite lao xuống và tấn công kẻ địch, gây 80/140/200 sát thương, có 20%/30%/40% cơ hội nuốt chửng kẻ địch.`,
        },
        {
          name: "FIERY MIST",
          imgFirst: "3SkuwpY",
          subName: `(Sương mù lửa) ( kích hoạt ) (thời gian hồi chiêu: 15 giây) (1/1/1 điểm anh hùng)`,
          describe: `Ashbite tạo ra một đám khói nóng làm chậm kẻ địch đi 30%/40%/50% trong 3/4/5 giây.`,
        },
        {
          name: "WILDFIRE BARRAGE",
          imgFirst: "3MgRoTL",
          subName: `(Bão lửa hoang dã) ( kích hoạt ) (thời gian hồi chiêu: 18 giây) (3/3/3 điểm anh hùng)`,
          describe: `Ashbite thiêu đốt mặt đất, làm tan chảy tất cả kẻ địch bằng 4/8/12 vụ nổ, mỗi vụ nổ 30 sát thương.`,
        },
        {
          name: "REIGN OF FIRE",
          imgFirst: "3Mhjs9w",
          subName: `(THỜI ĐẠI CỦA LỬA) ( bị động ) (1/2/2 điểm anh hùng)`,
          describe: `Các đòn tấn công của Ashbite dựa trên lửa khiến kẻ thù bốc cháy, đốt cháy chúng với 6/18/30 sát thương trong 3 giây.`,
        },
      ],
      stats: `Level	HP	Sát thương Lửa (1.6s) 3s trên IOS	Giáp	Hồi máu	Hồi sinh
    6	520	24-36	None	26	30s
    7	540	26-40	None	27	30s
    8	560	29-43	None	28	30s
    9	580	31-47	None	29	30s
    10	600	34-50	None	30	30s`,
    },
    Bonehart: {
      name: "Bonehart",
      imgSmall: "3tTwHXp",
      imgBig: "45NN3OJ",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "SPINE RAIN",
          imgFirst: "3rWPbG9",
          subName: `(Mưa xương) (thời gian hồi chiêu: 21 giây) (2/2/2 điểm anh hùng)`,
          describe: `Mưa 6/8/10 gai trên diện rộng, mỗi gai gây 12-36/16-40/20-44 sát thương chuẩn trong phạm vi 100.`,
        },
        {
          name: "BONE GOLEM",
          imgFirst: "46MfoGC",
          subName: `(Golem xương) (thời gian hồi chiêu: 15 giây) (1/1/1 điểm anh hùng)`,
          describe: `Bonehart triệu hồi một con golem xương (được gọi thích hợp là Wishbone) để hỗ trợ anh ta chiến đấu trong 20/30/40 giây. Không quá ba golem có thể hoạt động cùng một lúc.Bone Golem tăng 50% sát thương và tăng áo giáp lên Low nếu đứng gần Death Knight. Họ cũng hồi phục với 2 máu mỗi giây với bản nâng cấp Dũng cảm cho doanh trại.`,
          table: `Level	HP	Damage (2.0s)	Giáp
        1	80	2-6	None
        2	120	4-8	None
        3	160	6-10	None`,
        },
        {
          name: "PLAGUE CARRIER",
          imgFirst: "3QvdNyY",
          subName: `(Người mang mầm bệnh) (thời gian hồi chiêu: 21 giây) (3/3/3 điểm anh hùng)`,
          describe: `Bonehart giải phóng 6/8/10 vật mang bệnh dịch lây nhiễm và gây sát thương lên tới 60/80/100 cho kẻ địch trên đường đi. Nâng cấp này cũng cho phép các đòn tấn công của Bonehart lây nhiễm sang kẻ thù.`,
        },
        {
          name: "DISEASE NOVA",
          imgFirst: "471Iam1",
          subName: `(Bệnh Nova) (thời gian hồi chiêu: 32 giây) (2/2/2 điểm anh hùng)`,
          describe: `Bonehart lao xuống đất, gây 50/100/150 sát thương và lây nhiễm cho kẻ địch dính vào vụ nổ. Kỹ năng này sẽ chỉ kích hoạt nếu có ít nhất 3 kẻ địch ở gần nhau.`,
        },
        {
          name: "UNSTABLE DISEASE",
          imgFirst: "3QuLXSz",
          subName: `(BỆNH KHÔNG ỔN ĐỊNH) (thụ động) (2/2/2 điểm anh hùng)`,
          describe: `Kẻ địch bị nhiễm bệnh sẽ phát nổ khi chết, gây sát thương 30/60/90 và lây nhiễm cho những kẻ địch ở gần.`,
        },
      ],
      stats: `Level	HP	Sát thương bệnh dịch (1.6s) (Trên IOS 3.0s)\t Giáp	Hồi máu	Hồi sinh
    6	550	14-41	None	22	30s
    7	575	15-45	None	23	30s
    8	600	17-50	None	24	30s
    9	625	18-54	None	25	30s
    10	650	20-59	None	26	30s`,
    },
    // 3 Heroes Second Frontiers
    Lucrezia: {
      name: "Lucrezia",
      imgSmall: "46HusVD",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Drain Life",
          imgLast: "4093NyE",
          subName: `(Thời gian hồi chiêu: 15 giây)`,
          describe: `Gây 150 sát thương chuẩn cho kẻ địch. Tùy thuộc vào Level sát thương mà kỹ năng này gây ra, hãy hồi máu cho Lucrezia số lượng đó.`,
        },
        {
          name: "Slayer Attack",
          imgLast: "40h3JNy",
          subName: `(Thời gian hồi chiêu: 10 giây)`,
          describe: `Gây 80-160 sát thương chuẩn cho tất cả kẻ địch xung quanh Lucrezia. Nó gây sát thương gấp 10 lần cho Vampires và thường giết chết chúng ngay lập tức.`,
        },
      ],
    },
    "Rurin Longbeard": {
      name: "Rurin Longbeard",
      imgSmall: "3Fwh9eQ",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Hammer Smash",
          imgLast: "3FtzUQj",
          subName: `(Búa đập) (Thời gian hồi chiêu: 8,5 giây cứ sau 7 đòn đánh thường một lần)`,
          describe: `Rurin đập đất với sức mạnh cực lớn và gây 60-120 sát thương chuẩn trên diện rộng.`,
        },
      ],
    },
    "The Black Corsair": {
      name: "The Black Corsair",
      imgSmall: "3s4h6Us",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Explosive Keg",
          imgLast: "46OrJKf",
          subName: `(Thùng thuốc súng)`,
          describe: `Đây là đòn tấn công cơ bản của anh ấy. Black Corsair ném một thùng thuốc nổ gây 80-100 sát thương diện rộng.`,
        },
        {
          name: "Naval Mines",
          imgLast: "45JKBca",
          subName: `(Mỏ hải quân) (Thời gian hồi chiêu: 6 giây)`,
          describe: `Ném một quả mìn hải quân nổi trên mặt nước. Kẻ địch chạm vào mìn hải quân sẽ nhận 280 điểm sát thương. Thủy triều truyền từ cá mập xuống đất có thể tràn qua các mỏ. Mỗi quả tồn tại trong 30 giây hoặc cho đến khi phát nổ.`,
        },
      ],
    },
    // 8 Towers Origins
    "Arcane Archers": {
      name: "Arcane Archers",
      imgSmall: "45HhzcZ",
      imgBig: "3tMaeLY",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Burst Arrows",
          imgFirst: "40agEkc",
          subName: `(Mũi tên nổ) (Thời gian hồi chiêu: 12 giây) "Hãy thắp sáng chúng lên!"`,
          describe: `Bắn một mũi tên ma thuật nổ gây thêm sát thương phép trên một vùng (diện tích sát thương: 115). Trên phiên bản Android, Steam và Switch, mũi tên ban đầu gây sát thương tấn công thông thường (một nửa số đòn tấn công được liệt kê, vì nó bắn hai mũi tên cùng một lúc) và bị ảnh hưởng bởi Obsidian Heads.`,
          table: `Level	Giá	Damage
              1	200	80 (88)
              2	200	160 (176)
              3	200	240 (264)`,
        },
        {
          name: "Slumber Arrows",
          imgFirst: "3SdjOBB",
          subName: `(Mũi tên ngủ) "Những giấc mơ ngọt ngào!"`,
          describe: `Bắn một mũi tên khiến kẻ địch ngủ trong 4 (4,4) giây.`,
          table: `Level	Giá	Hồi chiêu
              1	180	20s
              2	180	16s
              3	180	12s`,
        },
      ],
      achievements: [
        {
          name: "RAMBO STYLE",
          imgFirst: "40pWu65",
          describe: `Đánh bại 50 kẻ thù đang bay bằng Mũi tên nổ.`,
        },
        {
          name: "LULLABY!",
          imgFirst: "3tJxDOi",
          describe: `Đánh bại 50 kẻ thù đang ngủ say.`,
        },
      ],
    },
    "Bladesinger Hall": {
      name: "Bladesinger Hall",
      imgSmall: "460z4p3",
      imgBig: "3QuMa8j",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Perfect Parry",
          imgFirst: "4782FxH",
          imgLast: "3QdHDHb",
          subName: `(Sự đỡ lại hoàn hảo) "Vô hình như nước!"`,
          describe: `Có cơ hội trở nên bất tử trong 2 giây đồng thời gây 36 sát thương chuẩn trong một khu vực nhỏ khi bị tấn công. 
              `,
          table: `Level	Giá	Cơ hội bất khả xâm phạm
              1	175	10%
              2	175	20%
              3	175	30%`,
          note: `<div>Trong khi đỡ đòn, Bladesinger sẽ không tấn công, chuyển mục tiêu hoặc sử dụng Blades Dance.<br/>
              Nhận đòn trong khi đỡ đòn có thể kích hoạt lại kỹ năng, thêm 2 giây vào bộ đếm thời gian đỡ đòn.<br/>
              Việc thay đổi điểm tập hợp sớm sẽ kết thúc cuộc tấn công.<br/>
              Những kẻ địch có cơ chế tiêu diệt ngay lập tức là không thể bị đỡ đòn như:
              <div class='hqd_lh50'>
                <div><b>Redcap</b></div>
                <div><b>Twilight Heretic</b></div>
                <div><b>Bram The Beheader</b></div>
                <div><b>Malicia</b></div>
                <div><b>Spider Goddess</b></div>
              </div></div>`,
        },
        {
          name: "Edge Mastery",
          imgFirst: "3Mhfj5g",
          subName: `(Làm chủ cạnh) "Sự sắc nét là một trạng thái của tâm trí."`,
          describe: `Tăng sát thương tấn công của Bladesinger thêm 5 và tốc độ tấn công thêm 20% (tốc độ tấn công: 0,8 giây; +9,25 DPS trong thực tế). Giá 300 vàng`,
        },
        {
          name: "Blade Dance",
          imgFirst: "40bEfkl",
          imgLast: "3MeNAlM",
          subName: `(Kiếm vũ) (Thời gian hồi chiêu: 10 giây) "Mỗi trận chiến hát giai điệu của nó."`,
          describe: `Bladesinger trở nên cơ động đặc biệt chém nhiều lần gây sát thương chuẩn. <br/>
        
              * Yêu cầu 2 mục tiêu trong phạm vi để kích hoạt. Mỗi lần nhảy sẽ ưu tiên kẻ địch không bị tấn công để phân bổ sát thương đều.<br/>
              * Bladesinger là bất tử trong Blade Dance.`,
          table: `Level	Trị giá	Số lượng dấu gạch chéo	Sát thương mỗi nhát chém
              1	250	2 lần	20-35
              2	250	3 lần	35-47
              3	250	4 lần	40-56`,
        },
      ],
      achievements: [
        {
          name: "FOOTLOOSE",
          imgFirst: "3McWu36",
          describe: `Đỡ đòn hoàn hảo với tổng lực sát thương là 1000.`,
        },
        {
          name: "TAURIEL APPRENTICE",
          imgFirst: "499DP1Y",
          describe: `Thực hiện 600 chiêu kiếm vũ.`,
        },
      ],
    },
    "Wild Magus": {
      name: "Wild Magus",
      imgSmall: "3Qth4yY",
      imgBig: "494Bplp",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Eldritch Doom",
          imgFirst: "3MdNaMB",
          imgLast: "3MeNOJE",
          subName: `(Sự diệt vong của Eldritch) "Cát bụi về với cát bụi"`,
          describe: `Kích nổ kẻ địch, gây sát thương phép thuật cho tất cả kẻ địch khác ở gần (diện tích sát thương: 175).`,
          table: `Level	Trị giá	Sát thương	Thời gian hồi chiêu
              1	325	80	28s
              2	185	180	24s
              3	185	260	20s`,
        },
        {
          name: "Ward of Disruption",
          imgFirst: "3QwkJft",
          imgLast: "49aQFx1",
          subName: `(Phường gây rối) (Thời gian hồi chiêu: 11 giây) "Im lặng là đức tính"`,
          describe: `Làm im lặng kẻ thù trong phạm vi, chặn khả năng phép thuật của chúng trong 10 giây.`,
          table: `Level	Trị giá	Mục tiêu tối đa
              1	225	1
              2	225	3
              3	225	6`,
          note: `Không giống như Totem of Spirits từ <b>Tribal Axethrowers</b>, nhắm vào một khu vực cố định, Ward of Disruption nhắm mục tiêu trực tiếp vào những kẻ thù cụ thể và chỉ những kẻ thù có kỹ năng phép thuật. Những kẻ thù này bao gồm:
              <div class="hqd_lh50">
                <div><b>Gnoll Blighter</b> (tấn công tầm xa và làm câm lặng <b>Magic Blossom</b> )</div>
                <div><b>Twilight Harasser</b></div>
                <div><b>Satyr Hoplite</b>(triệu tập <b>Satyr Cutthroat</b>)</div>
                <div><b>Twilight Scourger</b> (khuyến khích đồng minh và nguyền rủa tháp khi chết)</div>
                <div><b>Twilight Avenger</b> (phép nổ)</div>
                <div><b>Fungus Breeder</b>(biến <b>Boomshroom</b> thành <b>Munchshroom</b>)</div>
                <div><b>Twilight Evoker</b> (chữa lành cho đồng đội và làm câm lặng kỹ năng đặc biệt của tháp Cấp 4)</div>
                <div><b>Twilight Heretic</b> (Nắm giữ bóng tối và tiêu thụ linh hồn)</div>
                <div><b>Razorboar</b> (Phí đốt)</div>
                <div><b>Arachnomancer</b> (triệu tập <b>Spiderbrood</b>, <b>Sword Spider</b> và <b>Son Of Mactans</b> )</div>
                <div><b>Blood Ogre</b> (biến đổi <b>Gnoll Reaver</b>, <b>Gnoll Burner</b> và <b>Gnoll Gnawer</b> thành <b>Blood Gnoll</b>)</div>
                <div><b>Ogre Magi</b> (hào quang lifelink với các đồng minh ở gần)</div>
              </div>`,
        },
      ],
      achievements: [
        {
          name: "IT'S A KIND OF MAGIC",
          imgFirst: "3rVlzJi",
          describe: `Đánh bại 50 kẻ thù bằng vụ nổ Eldritch Doom.`,
        },
        {
          name: "COUNTER MASTER",
          imgFirst: "49aDwEu",
          describe: `Đánh bại 250 kẻ địch bị câm lặng.`,
        },
      ],
    },
    "Arch-Druid Henge": {
      name: "Arch-Druid Henge",
      imgSmall: "3Sa0lBR",
      imgBig: "49aDEDY",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Sylvan Curse",
          imgFirst: "3SePmr4",
          imgLast: "3Q4Fz42",
          subName: `(Lời nguyền Sylvan) (Thời gian hồi chiêu: 16 giây) (Chia sẻ nỗi đau!)`,
          describe: `Nguyền rủa kẻ địch trong 5 giây, khiến phần trăm sát thương gây ra cho kẻ địch cũng ảnh hưởng đến kẻ địch ở gần.`,
          table: `Level	Trị giá	Phần trăm sát thương
              1	250	35%
              2	250	70%
              3	250	100%`,
        },
        {
          name: "Runed Bears",
          imgFirst: "494BLbJ",
          imgLast: "45Fd5Uk",
          subName: `(Gấu Runed) (Quyền mang vũ khí!)`,
          describe: `Gọi một con gấu rune thần thoại để chặn và chiến đấu với kẻ thù.`,
          table: `Level	Trị giá	Số lượng gấu
              1	350	1
              2	350	2`,
          table2: `HP	Tỉ lệ lành bệnh	Damage (1.0 giây)	Giáp	hồi sinh
              250	25	20-40	20%	20s`,
        },
      ],
      achievements: [
        {
          name: "BEORNINGS",
          imgFirst: "4782SRv",
          describe: `Có 8 Gấu Runed trở lên trong bất kỳ giai đoạn nào.`,
        },
        {
          name: "NO PAIN, NO GAIN",
          imgFirst: "497DdtJ",
          describe: `Gây hơn 100.000 sát thương với Lời nguyền Sylvan.`,
        },
      ],
    },
    "Golden Longbows": {
      name: "Golden Longbows",
      imgSmall: "45HhUMN",
      imgBig: "45KQHc3",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Crimson Sentence",
          imgFirst: "3Qt9m7Z",
          imgLast: "3Sa0wx1",
          subName: `(Câu đỏ thẫm) (Bắn xuyên tim!)`,
          describe: `Mỗi phát bắn đều có cơ hội giết chết nạn nhân của nó. Điều này được hiển thị dưới dạng <img src="3Qd96IM" alt="Headshot" />.<br/>(*Tỷ lệ phần trăm giảm một nửa trong phạm vi ngắn.)`,
          table: `Level	Trị giá	* Cơ hội giết ngay lập tức
              1	300	3% (3,3%)
              2	300	6% (6,6%)
              3	300	9% (9,9%)`,
        },
        {
          name: "Hunter's Mark",
          imgFirst: "3Qd96IM",
          imgLast: "46FXYLy",
          subName: `(Dấu hiệu thợ săn) ( Thời gian hồi chiêu: 12 giây ) (Mắt bò!)`,
          describe: `Đánh dấu mục tiêu*, khiến mục tiêu chịu 200% (220%) sát thương từ mọi nguồn. <br/>
              *Không bao gồm các ông chủ.
              `,
          table: `Level	Trị giá	Khoảng thời gian
              1	225	5 giây
              2	225	10 giây
              3	225	15 giây`,
        },
      ],
      achievements: [
        {
          name: "VALAR MORGHULIS",
          imgFirst: "3rYnKvE",
          describe: `Đánh dấu tổng cộng 5 mục tiêu cùng một lúc.`,
        },
        {
          name: "KILLTACULAR!",
          imgFirst: "3FupdN5",
          describe: `Crimson Sentence 10 kẻ địch trong một đợt.`,
        },
      ],
    },
    "Forest Keepers": {
      name: "Forest Keepers",
      imgSmall: "3FwQkav",
      imgBig: "3s4hHFG",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Circle of Life",
          imgFirst: "3FupnnF",
          imgLast: "3QvTf9E",
          subName: `(Vòng đời) (Thiên nhiên bảo vệ chính mình.)`,
          describe: `Hồi máu cho bản thân và đồng minh xung quanh trong 4 giây. <br/>
              (Thời gian hồi chiêu: 10 giây)`,
          table: `Level	Trị giá	HP được chữa lành
              1	185	80
              2	185	160
              3	185	240`,
        },
        {
          name: "Eerie Gardener",
          imgFirst: "3FxQPks",
          imgLast: "46JlrLM",
          subName: `(Người làm vườn kỳ lạ) (Rừng thức giấc!)`,
          describe: `Bao phủ một khu vực có dây leo gai, làm chậm và gây sát thương cho kẻ địch. <br/>
              (Thời gian hồi chiêu: 16 giây)`,
          table: `Level	Trị giá	Sát thương	Chậm lại	Khoảng thời gian
              1	285	72	50%	4 giây
              2	285	144	50%	6 giây`,
        },
        {
          name: "Ancient Oak Spear",
          imgFirst: "472Vs1F",
          imgLast: "40pX3Nf",
          subName: `(Ngọn giáo sồi cổ) (Bạn! Nắm lấy!)`,
          describe: `Tăng cường sức mạnh cho ngọn giáo của Người giữ rừng, khiến họ gây sát thương chuẩn.`,
          table: `Level	Trị giá	Damage
              1	250	90
              2	250	125
              3	250	160`,
        },
      ],
      achievements: [
        {
          name: "1, 2, 3... PLANT!",
          imgFirst: "3MeFiun",
          describe: `Trồng 100 dây leo có gai!`,
        },
        {
          name: "KINGSFOIL LEAVES",
          imgFirst: "3FxR5Qs",
          describe: `Tái sinh 25 lần cho cùng một người lính.`,
        },
      ],
    },
    "High Elven Mage": {
      name: "High Elven Mage",
      imgSmall: "46KBdGf",
      imgBig: "3Mc0XTO",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Timelapse",
          imgFirst: "49aVxT5",
          subName: `(Tua nhanh thời gian) "Đợi một chút..."`,
          describe: `Đẩy kẻ địch ra khỏi chiến trường trong 5 giây, gây sát thương phép. <br/>
              ( Thời gian hồi chiêu: 16 giây )`,
          table: `Level	Trị giá	Mục tiêu tối đa	Damage
              1	225	2	100
              2	225	3	135
              3	225	4	150`,
        },
        {
          name: "Arcane Sentinel",
          imgFirst: "45LvAGs",
          subName: `(Lính gác bí ẩn) "Tìm kiếm và tiêu diệt!"`,
          describe: `Triệu hồi các lính canh ma thuật tìm kiếm và tấn công kẻ thù ở gần ở tầm xa.
        
              Sentinels có phạm vi gấp đôi so với High Elven Mage. Đầu tiên, Sentinels bắt đầu đi vòng quanh pháp sư trong 4 giây để nạp năng lượng. Lính canh đã được sạc đầy và sẵn sàng bắt đầu tìm kiếm và tấn công mục tiêu, bắn 10 mũi tên trong vòng 5 giây. Chu kỳ này mất 10 giây.`,
          table: `Level	Trị giá	Sát thương trên mỗi tia	Số lượng lính gác
              1	300	16-32	1
              2	300	16-32	2`,
        },
      ],
      achievements: [
        {
          name: "PHANTOM ZONED",
          imgFirst: "3s2Bdm5",
          describe: `Giữ kẻ địch bất tỉnh trong tổng thời gian 1000 giây.`,
        },
        {
          name: "RED FIVE",
          imgFirst: "3Qx5LFK",
          describe: `Hoàn thành bất kỳ màn nào với 5 Arcane Sentinels đang hoạt động.`,
        },
      ],
    },

    Weirdwood: {
      name: "Weirdwood",
      imgSmall: "3QwIRi7",
      imgBig: "3Fs8dHz",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Fiery Nut",
          imgFirst: "3QirK2e",
          imgLast: "46UOM5Q",
          subName: `(Hạt lửa) (Điều này sẽ *thật* sẽ đau đấy!)`,
          describe: `Ném một quả hạch đang cháy phát nổ gây sát thương khu vực, đốt cháy mặt đất trong 5 giây. Hiệu ứng đốt cháy kéo dài 6 giây và làm mới nếu kẻ địch vẫn ở trên mặt đất đang cháy, do đó chúng có thể bị đốt cháy trong tối đa 11 giây.
        
              (Thời gian hồi chiêu: 25,5 giây, khoảng 8 hạt một lần )`,
          table: `Level	Trị giá	sát thương nổ	Sát thương do hỏa hoạn (tổng thể)
              1	330	135	1/0,1s<br/>(60-110)
              2	330	270	2/0,1s<br/>(120-220)
              3	330	405	3/0,1s<br/>(180-330)`,
          note: `<div>* Vụ nổ của Hạt lửa gây sát thương cho pháo binh nhưng không bị ảnh hưởng bởi nâng cấp Tải nặng hoặc Tác động sốc.
              * Nếu thời gian hồi chiêu kết thúc nhưng Weirdwood có một quả hạch bình thường, anh ta cần ném nó trước khi Hạt Lửa có thể được sử dụng.
              * Sát thương lửa là sát thương chuẩn và được xử lý theo thời gian.
              * Nếu <b>Twilight Evoker</b> làm câm lặng một Weirdwood với Fiery Nut trên tay, anh ta không thể ném hạt và sẽ không thay thế nó bằng một hạt bình thường, khiến anh ta bị vô hiệu hóa trong thời gian đó.</div>`,
        },
        {
          name: "Clobber",
          imgFirst: "3Qx5SRG",
          imgLast: "3tM2863",
          subName: `(Áo choàng) (Đập vỡ!)`,
          describe: `Làm rung chuyển mặt đất, gây sát thương chuẩn và làm choáng kẻ địch trong phạm vi. (Thời gian hồi chiêu: 14 giây)
              (Yêu cầu ít nhất 2 mục tiêu trong phạm vi và không cầm Hạt để kích hoạt.)
               2 mục tiêu đầu tiên sẽ có 100% khả năng bị choáng, mục tiêu thứ 3 có 75%, còn lại có 50%.`,
          table: `Level	Trị giá	Damage	Choáng
              1	225	75	1 giây
              2	225	100	2 giây
              3	225	125	3 giây`,
        },
      ],
      achievements: [
        {
          name: "HEAVYWEIGHT CLASS",
          imgFirst: "3Q96fk3",
          describe: `Làm choáng 10 kẻ thù trở lên chỉ bằng một cú đánh.`,
        },
        {
          name: "WILDFIRE HARVEST",
          imgFirst: "46YniwJ",
          describe: `Ném 1000 hạt đang cháy.`,
        },
      ],
    },
    // 8 Special Towers Origins
    "Awok Hut": {
      name: "Awok Hut",
      imgSmall: "3rWvG0t",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          describe: `Khiên có thể được sử dụng để ngăn chặn sát thương cận chiến và sát thương tầm xa và khi được che chắn bằng một chiếc khiên có thể phục hồi 15 HP và nhận ít sát thương hơn từ kẻ thù`,
        },
      ],
    },
    "Gryphon Rider": {
      name: "Gryphon Rider",
      imgSmall: "3tMdl6K",
      link: "link",
      linkTitle: "text",
      achievements: [
        {
          name: "DOGFIGHT ACE",
          imgFirst: "3Q8yHTb",
          describe: `Yêu cầu các Kỵ sĩ Gryphon của bạn đánh bại 25 <b>Perython</b>.`,
        },
      ],
    },
    "Faery Dragon Aerie": {
      name: "Faery Dragon Aerie",
      imgSmall: "3tOFv0T",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Hatch a Dragon",
          imgFirst: "474ngD2",
          subName: `(Ấp một con rồng) (Ở đây có Rồng!)`,
          describe: `Ấp một con Rồng Tiên để kết tinh kẻ thù của bạn.`,
          table: `Level	Vàng	Số lượng rồng
            1	150	1
            2	150	2`,
        },
        {
          name: "Harder Crystal",
          imgFirst: "473gPA5",
          subName: `(Tinh thể cứng hơn) (Giữ vững lập trường, kiên định!)`,
          describe: `Cải thiện thời gian kết tinh. Yêu cầu ít nhất một con rồng để mua.`,
          table: `Level	Vàng	Thời gian kết tinh*
            1	125	1,5s
            2	125	2s`,
        },
      ],
      achievements: [
        {
          name: "JURASSIC LAKE",
          imgFirst: "476K1pZ",
          describe: `Kết tinh một con lính trong hơn 10 giây.`,
        },
      ],
    },
    "Gnome Garden": {
      name: "Gnome Garden",
      imgSmall: "3Qx6dUs",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Cream &AMP; Porridge",
          imgFirst: "46Ot4AL",
          subName: `(Kem &AMP; Cháo) (Tuyệt vời!)`,
          describe: `Nhiều thức ăn hơn, nhiều Gnomes vui vẻ hơn khi chơi khăm và chơi khăm!`,
          table: `Level	Trị giá	Số lượng Gnomes
            1	250	2
            2	250	3`,
        },
        {
          name: "Total Mischief",
          imgFirst: "46Ot6IT",
          subName: `(Tổng số nghịch ngợm) (Lừa hoặc đối xử!)`,
          describe: `Thêm nhiều thủ thuật hơn vào tiết mục của người lùn.`,
          table: `Level	Trị giá	Kỹ năng
            1	200	chất độc
            2	200	Dịch chuyển tức thời
            3	200	Sự tan rã`,
          note: `<div><h3>Danh sách thủ thuật</h3>
            <strong>Móc túi</strong>: Cướp 1-6 vàng từ mục tiêu. <br/>
            <strong>Đa hình</strong>: Biến mục tiêu thành Bunny. (Kẻ thù đa hình cho 7 vàng khi chết.)<br/>
            <strong>Độc</strong>: Đầu độc mục tiêu để nhận tổng cộng 120 sát thương (không gây chết người)<br/>
            <strong>Warp</strong>: Dịch chuyển mục tiêu 50 nút trở lại đường.<br/>
            <strong>Phân rã</strong>: Tiêu diệt mục tiêu ngay lập tức.</div>`,
        },
      ],
    },
    "Dragon Nest": {
      name: "Dragon Nest",
      imgSmall: "3FwR3IQ",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Blazing Breath",
          imgFirst: "3tKc7sL",
          imgLast: "40bFwI9",
          subName: `(Hơi thở rực cháy) "Ngọn lửa trên!"`,
          describe: `Phun ra một ngọn lửa hình nón, gây sát thương diện rộng. Thời gian hồi chiêu: 10 giây.`,
          table: `Level	Vàng	Sát thương
            1	250	150
            2	200	250
            3	200	350`,
        },
        {
          name: "Fiery Mist",
          imgFirst: "3MeQIOI",
          imgLast: "40cWK8o",
          subName: `(Sương Lửa)  "Sương mù đỏ giáng xuống!"`,
          describe: `Phun ra một đám khói thiêu đốt và làm chậm kẻ địch.`,
          table: `Vàng	Damage	Làm chậm	Khoảng thời gian	Hồi chiêu
            250	100	60%	3 giây	12 giây`,
        },
      ],
      achievements: [
        {
          name: "D&AMP;D",
          imgFirst: "45Gc12l",
          describe: `Yêu cầu Beresad và Ashbite đánh bại 100 kẻ thù.`,
        },
      ],
    },
    "Young Beresad": {
      name: "Young Beresad",
      imgSmall: "3QdJZpp",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Conflagration",
          imgFirst: "3Mc1WDu",
          subName: `(Hỏa hoạn) "Thời đại của lửa!"`,
          describe: `Ngay sau khi được trả tiền, Beresad sẽ bay và bắt đầu thở ra ngọn lửa xanh trên toàn bản đồ: anh ta bắt đầu bằng cách đốt cháy con đường trên 'hòn đảo' phía đông nam, sau đó bay đến hòn đảo phía tây nam và đặt đường đi từ Hòn đá phù thủy đến phía tây thoát ra bằng lửa, sau đó tiếp tục phun lửa trên con đường từ tháp dịch chuyển đến lối vào phía nam, và cuối cùng thắp sáng hòn đảo phía bắc trước khi trở về hang ổ của mình để ngủ. Toàn bộ quá trình mất 18 giây trên iOS và 30 giây trên Steam/Android.`,
        },
      ],
    },
    "Renegade Post": {
      name: "Renegade Post",
      imgSmall: "3sauNRK",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Life Stealer Strike",
          imgFirst: "3QrlupX",
          imgLast: "4788o6J",
          subName: `(Cuộc tấn công đánh cắp sự sống) "Cuộc sống của bạn là của tôi!"`,
          describe: `Đòn tấn công gây sát thương vật lý, hồi máu cho Renegade bằng một nửa số tiền đó. (Thời gian hồi chiêu: 6 giây)`,
          table: `Level	Trị giá	Damage	HP đã được chữa lành
            1	250	50	25
            2	250	100	50
            3	250	150	75`,
        },
        {
          name: "Double Daggers",
          imgFirst: "3tHrlhT",
          imgLast: "471HAVE",
          subName: `(Dao găm đôi) "Tại dao găm rút ra!"`,
          describe: `Kẻ nổi loạn ném 2 con dao găm thay vì 1 trong mỗi đòn tấn công tầm xa. Giá 225 Vàng.`,
        },
        {
          name: "Blade Mail",
          imgFirst: "3tDou9J",
          imgLast: "3QtiUzS",
          subName: `(Thư lưỡi) "Không thể chạm vào cái này!"`,
          describe: `Kẻ phản bội phản ánh tỷ lệ phần trăm của tất cả sát thương mà chúng gây ra cho kẻ thù mà chúng đang đối mặt.`,
          table: `Level	Trị giá	Tỷ lệ phần trăm
            1	135	20%
            2	135	40%
            3	135	60%`,
        },
      ],
      achievements: [
        {
          name: "BROTHER AGAINST BROTHER",
          imgFirst: "47mEbRx",
          describe: `Hãy để những kẻ nổi loạn của bạn đánh bại 50 yêu tinh chạng vạng.`,
        },
      ],
    },
    Bastion: {
      name: "Bastion",
      imgSmall: "3rYoHnI",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Razor Stars",
          imgFirst: "45MNIQD",
          subName: `(Sao dao cạo) "Sắc nét hơn có nghĩa là nguy hiểm hơn."`,
          describe: `Mỗi ngôi sao sắc bén sẽ gây nhiều sát thương hơn.`,
          table: `Level	Trị giá	Sát thương trên mỗi sao dao cạo
            1	200	20-30
            2	200	30-40`,
        },
      ],
    },
    // 16 Heroes Origins
    Eridan: {
      name: "Eridan",
      imgSmall: "3Mhm3jM",
      imgBig: "3S8dxr3",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "ARROW VOLLEY",
          imgFirst: "3Se2Va6",
          imgLast: "3tMmJao",
          subName: `( kích hoạt, 10 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Eridan bắn liên tiếp một loạt mũi tên 3/6/9, nhắm vào kẻ địch trong phạm vi.`,
        },
        {
          name: "PORCUPINE",
          imgFirst: "46VMG5S",
          subName: `( nội tại ) (1/1/1 điểm anh hùng)`,
          describe: `Eridan gây thêm 1/2/3 sát thương lên tới tối đa 3/6/9 cho mỗi mũi tên liên tiếp vào cùng một mục tiêu.`,
        },
        {
          name: "NIMBLE FENCER",
          imgFirst: "3SbKMto",
          imgLast: "476Kqsv",
          subName: `( nội tại ) (1/2/3 điểm anh hùng)`,
          describe: `Mang lại cho Eridan 10%/30%/60% cơ hội né tránh và chống lại các đòn tấn công cận chiến với mức sát thương 20-40. <br/>
              (Nó bị lỗi trên iOS ở chỗ nó chỉ mang lại cho anh ta 10%/20%/30% cơ hội.)`,
        },
        {
          name: "DOUBLE STRIKE",
          imgFirst: "45JaTuX",
          imgLast: "3s7Tpe8",
          subName: `( kích hoạt, 12 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Eridan thực hiện đòn tấn công đặc biệt bằng hai lưỡi, gây sát thương 40-80/70-140/100-200.`,
        },
        {
          name: "ARROW STORM",
          heroSpell: true,
          imgFirst: "3tJhrMN",
          subName: `( kích hoạt, 40 giây ) (4/5/6 điểm anh hùng)`,
          describe: `Bao phủ một khu vực rộng với một loạt mũi tên 14/17/21/25*, mỗi mũi tên gây 24/31/42/60* sát thương chuẩn. <br/>
              (*: Mô tả trên iOS không chính xác ở cấp độ 3. Sát thương thực tế và số lượng mũi tên được liệt kê ở trên.)`,
        },
      ],
      stats: `Level	HP	Hồi máu	Damage 1s Cận chiến &AMP; Tầm xa	Giáp	Hồi sinh
        1	220	20 HP/s	8-12	Low (10%)	15s
        2	240	25 HP/s	9-13	Low (15%)	15s
        3	260	30 HP/s	10-16	Low (20%)	15s
        4	280	35 HP/s	10-16	Low (25%)	15s
        5	300	40 HP/s	11-17	Low (30%)	15s
        6	320	45 HP/s	12-18	Medium (35%)	15s
        7	340	50 HP/s	13-19	Medium (40%)	15s
        8	360	55 HP/s	14-20	Medium (45%)	15s
        9	380	60 HP/s	14-22	Medium (50%)	15s
        10	400	65 HP/s	15-23	Medium (55%)	15s`,
    },
    Arivan: {
      name: "Arivan",
      imgSmall: "3tN9oyE",
      imgBig: "45NuCtk",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "SEAL OF FIRE",
          imgFirst: "46Yq4Bm",
          imgLast: "3tMe87I",
          subName: `(Dấu ấn lửa) (kích hoạt, thời gian hồi chiêu: 26 giây) (2/2/2 điểm anh hùng)`,
          describe: `Arivan bắn 2/4/6 quả cầu lửa gây sát thương diện tích 20-40.`,
        },
        {
          name: "LIGHTNING ROD",
          imgFirst: "3tJIyHE",
          imgLast: "496Fs0q",
          subName: `(Cột thu lôi) ( kích hoạt, thời gian hồi chiêu: 20 giây ) (1/2/3 điểm anh hùng)`,
          describe: `Arivan phóng ra một tia sét gây sát thương chuẩn 40-80/100-180/180-340.`,
        },
        {
          name: "ICY PRISON",
          imgFirst: "3Qvgd0w",
          imgLast: "49asLBO",
          subName: `(Nhà tù băng giá) ( kích hoạt, thời gian hồi chiêu: 15 giây ) (1/2/3 điểm anh hùng)`,
          describe: `Arivan đóng băng kẻ địch tại chỗ trong 2/4/6 giây, gây 35/50/65 sát thương phép thuật.`,
        },
        {
          name: "STONE DANCE",
          imgFirst: "499rpra",
          imgLast: "495lXp7",
          subName: `(Đá nhảy múa) ( nội tại, thời gian hồi chiêu: 20 giây ) (1/1/1 điểm anh hùng)`,
          describe: `Triệu hồi 1/2/3 khiên đá bảo vệ Arivan. Mỗi viên đá có thể chịu được tới 35 sát thương hoặc một đòn tấn công duy nhất.`,
        },
        {
          name: "ELEMENTAL STORM",
          imgFirst: "46GLZxp",
          subName: `(Bão nguyên tố) ( kích hoạt, thời gian hồi chiêu: 80 giây ) (4/5/6 điểm anh hùng)`,
          describe: `Triệu hồi một cơn lốc nguyên tố làm chậm và đóng băng kẻ thù, bắn tia sét và gây sát thương diện tích 90/210/320/500 trong 3/6/8/10 giây.`,
          table: `Level \tSát thương (mỗi 0,2 giây)	Khoảng thời gian	Chậm	Đông cứng	Thời gian đóng băng
            0	6	3	50%	-	-
            1	7	6	50%	-	-
            2	8	8	50%	4 lần	1,5 giây
            3	10	10	50%	4 lần	2 giây`,
        },
      ],
      stats: `Level	HP	Hồi máu	Damage Tầm xa (1.5s)	Damage cận chiến (1.0s)	Giáp	Hồi sinh
        1	115	8 HP/s	9-27	5-7	None	20s
        2	130	9 HP/s	10-30	5-9	None	20s
        3	145	10 HP/s	11-34	6-10	None	20s
        4	160	11 HP/s	12-37	6-12	None	20s
        5	175	12 HP/s	14-41	7-13	None	20s
        6	190	13 HP/s	15-44	8-14	None	20s
        7	205	14 HP/s	16-47	8-16	None	20s
        8	220	15 HP/s	17-51	9-17	None	20s
        9	235	16 HP/s	18-54	10-18	None	20s
        10	250	17 HP/s	19-57	11-20	None	20s`,
    },
    Catha: {
      name: "Catha",
      imgSmall: "46KIxle",
      imgBig: "471I8ea",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "FAERY SOUL",
          imgFirst: "46KIztm",
          imgLast: "3Qcctj7",
          subName: `(Linh hồn tiên thiên) (kích hoạt, thời gian hồi chiêu: 14 giây) (1/2/3 điểm anh hùng)`,
          describe: `Một vụ nổ phép thuật của Thần tiên có thể chữa lành vết thương cho tối đa 3 đơn vị đồng minh với lượng máu 50/100/150.`,
        },
        {
          name: "FAERY TALE",
          imgFirst: "46JmRWC",
          imgLast: "3FCxxdH",
          subName: `(Truyện thần tiên) (kích hoạt, thời gian hồi chiêu: 18 giây) (3/3/3 điểm anh hùng)`,
          describe: `Catha triệu tập 2/3/4 chiến binh pixie với lượng máu được cải thiện để chặn và chiến đấu với kẻ thù trong 10 giây.
              † Ở tầm xa, mỗi Pixie gây sát thương tương đương với Catha ở tầm xa.
              `,
          table: `Level	HP	Damage (1.0s)	Giáp
              1	30	3-7	None
              2	40	3-7	None
              3	50	3-7	None`,
          tableImg: "3MekO4O",
        },
        {
          name: "PIXIE'S FURY",
          imgFirst: "3QaI70v",
          imgLast: "3Fs90s1",
          subName: `(Cơn thịnh nộ của Pixie) (kích hoạt, thời gian hồi chiêu: 10 giây) (1/2/3 điểm anh hùng)`,
          describe: `Catha gửi 2/3/4 tiểu tiên để tấn công kẻ địch ở gần, gây 10-30 / 12-40 / 18-50 sát thương phép cho mỗi tiểu tiên.`,
        },
        {
          name: "PIXIE'S CURSE",
          imgFirst: "499rJpS",
          subName: `(Lời nguyền của Pixie) (nội tại) (1/1/1 điểm anh hùng)`,
          describe: `Mỗi đòn tấn công của tiểu tiên có 20% cơ hội nguyền rủa kẻ địch, làm choáng kẻ địch trong 0,5/1/1,5 giây`,
        },
        {
          name: "FAERY DUST",
          imgFirst: "49at0gc",
          subName: `(Bụi thiên tiên)(kích hoạt, thời gian hồi chiêu: 25 giây) (4/4/4 điểm anh hùng)`,
          describe: `Một phép thuật nhanh chóng làm choáng tất cả kẻ địch trong một khu vực trong 3/4,5/6 giây. Boss bị ảnh hưởng trong một nửa thời gian.`,
        },
      ],
      stats: `Level	HP	Hồi máu	Damage 1s Cận chiến &AMP; Tầm xa	Giáp	Hồi sinh
        1	210	26 HP/s	4-8	None	15s
        2	220	27 HP/s	5-9	Low (5%)	15s
        3	230	29 HP/s	6-10	Low (10%)	15s
        4	240	30 HP/s	6-12	Low (15%)	15s
        5	250	31 HP/s	7-13	Low (20%)	15s
        6	260	33 HP/s	8-14	Low (25%)	15s
        7	270	34 HP/s	8-16	Low (30%)	15s
        8	280	35 HP/s	9-17	Medium (35%)	15s
        9	290	36 HP/s	10-18	Medium (40%)	15s
        10	300	38 HP/s	11-20	Medium (45%)	15s`,
    },
    "Razz And Rags": {
      name: "Razz And Rags",
      imgSmall: "46YoGPX",
      imgBig: "408wnAm",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "RAGGIFIED",
          imgFirst: "3FAPadS",
          imgLast: "3tDp6fx",
          subName: `( kích hoạt ) (thời gian hồi chiêu: 25 giây) (3/3/3 điểm anh hùng)`,
          describe: `Biến kẻ địch có tối đa 200/600/bất kỳ máu nào thành Ragdoll để chiến đấu với đồng minh trong 3/5/7 giây.`,
        },
        {
          name: "KAMIHARE",
          imgFirst: "3Fwyxjz",
          imgLast: "3SvnvmH",
          subName: `( kích hoạt ) (thời gian hồi chiêu: 36 giây) (2/2/2 điểm anh hùng)`,
          describe: `Gửi ra 4/8/12 con thỏ bùng nổ khi tiếp xúc, gây sát thương chuẩn 30-40 diện tích cho mỗi con.`,
        },
        {
          name: "ANGRY GNOME",
          imgFirst: "3tE9KaE",
          imgLast: "3MaZLAg",
          subName: `( kích hoạt ) (thời gian hồi chiêu: 17 giây) (1/1/1 điểm anh hùng)`,
          describe: `Razz gọi ra một vật phẩm ngẫu nhiên và ném nó một cách kỳ diệu, gây sát thương chuẩn 25-45/50-90/75-135.`,
        },
        {
          name: "HAMMER TIME",
          imgFirst: "3FwRF16",
          imgLast: "4784Pxj",
          subName: `(Thời gian búa) ( kích hoạt ) (thời gian hồi chiêu: 36 giây) (2/2/2 điểm anh hùng)`,
          describe: `Rags tấn công một khu vực, làm choáng và gây sát thương lên tới 72/96/120 trong 3/4/5 giây.<br/>
              (Trong thực tế, Rags đập 7/9/12 lần, mỗi lần gây sát thương 10-15 vùng.)`,
        },
        {
          name: "CHANGELING",
          imgFirst: "3SbRsYw",
          subName: `(Biến đổi) ( kích hoạt ) (thời gian hồi chiêu: 60 giây) (4/4/4 điểm anh hùng)`,
          describe: `Biến tối đa 2* /4/6/8 kẻ thù thành Ragdoll chiến đấu với đồng minh trong 10 giây.<br/>
              * Các Ragdoll của Razz đều có HP bằng với HP còn lại của kẻ địch bị biến đổi.
              `,
          table: `HP	Damage (1.0 giây)	Giáp
              Thừa kế*	40-50	Không có`,
          tableImg: "3SbRCiA",
        },
      ],
      stats: `Level	HP	Hồi Máu	Damage vùng cận chiến (2.0s) &AMP; Damage phép tầm xa (0.8s)	Giáp	Hồi sinh
        1	350	23 HP/s	8-12	None	15s
        2	375	25 HP/s	9-14	None	15s
        3	400	27 HP/s	10-16	None	15s
        4	425	28 HP/s	12-17	None	15s
        5	450	30 HP/s	13-19	None	15s
        6	475	32 HP/s	14-21	None	15s
        7	500	33 HP/s	15-23	None	15s
        8	525	35 HP/s	16-25	None	15s
        9	550	37 HP/s	18-26	None	15s
        10	575	38 HP/s	19-28	None	15s`,
    },
    Lilith: {
      name: "Lilith",
      imgSmall: "3QuE54n",
      imgBig: "3s4zcWw",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "REAPER'S HARVEST",
          imgFirst: "3rYpbKy",
          imgLast: "45M7kUW",
          subName: ` (kích hoạt, thời gian hồi chiêu: 20 giây) (3/3/3 điểm anh hùng)`,
          describe: `Lilith gây 110/220/330 sát thương chuẩn cho kẻ địch với 10/20/30% cơ hội tiêu diệt ngay lập tức.
              Sát thương kỹ năng có thể được tăng thêm bởi Soul Eater bằng cách sử dụng công thức này (Sát thương mới/Sát thương cũ)*Sát thương cơ bản.`,
        },
        {
          name: "SOUL EATER",
          imgFirst: "46VNcAQ",
          imgLast: "3SdUrzY",
          subName: `(Hấp thụ linh hồn)(nội tại, thời gian hồi chiêu: 30 giây) (2/2/2 điểm anh hùng)`,
          describe: `Lilith hấp thụ linh hồn của kẻ địch đã ngã xuống để nhận thêm 30%/60%/90% sát thương của chúng dưới dạng sát thương cộng thêm trong 12 giây.`,
        },
        {
          name: "INFERNAL WHEEL",
          imgFirst: "3QFvs7v",
          imgLast: "45EEXI8",
          subName: `(Bánh xe địa ngục) (kích hoạt, thời gian hồi chiêu: 23 giây) (1/2/3 điểm anh hùng)`,
          describe: `Lilith tạo ra một Vòng lửa trong 5 giây, gây 90/180/270 sát thương chuẩn (6/12/18 sát thương mỗi 0,367 giây) cho tất cả kẻ địch trên đó. <br/>
              Vì debuff đốt Ring of Fire tồn tại trong 1 giây, nó thực sự có thể gây tổng sát thương chuẩn 108/216/324 cho kẻ địch ở trong khu vực bị ảnh hưởng trong toàn bộ thời gian.`,
        },
        {
          name: "RESURRECTION",
          imgFirst: "45EF2eU",
          imgLast: "409NJg1",
          subName: `(Phục sinh)(nội tại) (1/1/1 điểm anh hùng)`,
          describe: `Lilith có 10%/20%/30% cơ hội hồi sinh ngay lập tức sau khi bị giết.`,
        },
        {
          name: "HEAVENLY CHAOS",
          imgFirst: "3FsyDsG",
          subName: `(kích hoạt, thời gian hồi chiêu: 50 giây) (0/4/4/4 điểm anh hùng)`,
          describe: `Lilith có 50% cơ hội để gọi 3/4/5/6 Thiên thần sa ngã tấn công* và làm choáng** kẻ thù hoặc 50% cơ hội để gọi một trận Mưa lửa với 11 thiên thạch từ trên cao.
              *: Không thể tấn công kẻ thù đang bay. <br/>
              **: Không thể làm choáng các tên trùm, các tên trùm nhỏ hoặc <b>Bandersnatch</b>.
              `,
          table: `Level	Damage của thiên thần sa ngã	Damage Mưa lửa
              0	300	440
              1	512	880
              2	800	1320
              3	1200	1760`,
        },
      ],
      stats: `Level	HP	Hồi Máu	Damage (Gần: 1.0s, Xa: 1.1s)	Giáp	Hồi sinh
        1	240	24 HP/s	10-14	Low (10%)	18s
        2	260	26 HP/s	10-16	Low (15%)	18s
        3	280	28 HP/s	11-17	Low (20%)	18s
        4	300	30 HP/s	12-18	Low (25%)	18s
        5	320	32 HP/s	13-19	Low (30%)	18s
        6	340	34 HP/s	14-20	Medium (35%)	18s
        7	360	36 HP/s	14-22	Medium (40%)	18s
        8	380	38 HP/s	15-23	Medium (45%)	18s
        9	400	40 HP/s	16-24	Medium (50%)	18s
        10	420	42 HP/s	17-25	Medium (55%)	18s`,
    },
    "Reg'son": {
      name: "Reg'son",
      imgSmall: "45EFbPu",
      imgBig: "45Fp9oF",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "ELDRITCH HEAL",
          imgFirst: "3Fxl3Ew",
          imgLast: "40pZ7ot",
          subName: ` (nội tại) (1/2/3 điểm anh hùng)`,
          describe: `Bất cứ khi nào kẻ địch bị đánh bại ở gần, Reg'son được hồi máu bằng 5% / 15% / 30% tổng sinh lực của kẻ địch.`,
        },
        {
          name: "ELDRITCH BLADE",
          imgFirst: "3s6lPoI",
          imgLast: "40pZnnr",
          subName: `(kích hoạt, thời gian hồi chiêu: 30 giây) (3/3/3 điểm anh hùng)`,
          describe: `Reg'son đốt cháy bằng lửa trường lửa trong 5 giây, chém 10 lần và gây 30/50/70  sát thương chuẩn trên mỗi đòn tấn công với 1%/2%/3% cơ hội tiêu diệt.`,
        },
        {
          name: "ELDRITCH SLASH",
          imgFirst: "3MfIR3l",
          imgLast: "408H7i2",
          subName: `(kích hoạt, thời gian hồi chiêu: 15 giây) (2/3/4 điểm anh hùng)`,
          describe: `Cơ động đặc biệt Reg'son thực hiện 3 đòn tấn công gây sát thương vật lý 20-60 / 45-130 / 75-225 lên tối đa 3 kẻ địch.`,
        },
        {
          name: "ELDRITCH WAY",
          imgFirst: "40eiSyX",
          subName: `(nội tại) (1/1/1 điểm anh hùng)`,
          describe: `Tăng HP của Reg'son thêm 40/40/40 điểm.`,
        },
        {
          name: "VINDICATOR",
          imgFirst: "3MfpHL8",
          subName: `(kích hoạt, thời gian hồi chiêu: 200/100/70/50 giây) (3/3/3 điểm anh hùng)`,
          describe: `Vindicator tiêu diệt bất kỳ mục tiêu nào. Gây sát thương 500/1000/1500/2000 cho trùm.`,
        },
      ],
      stats: `Level	HP*	Hồi Máu	Damage (0.6s)	Giáp	Hồi sinh
        1	300	30 HP/s	6-9	None	15s
        2	320 (360/400/440)	32 HP/s	6-10	None	15s
        3	340 (380/420/460)	34 HP/s	7-11	None	15s
        4	360 (400/440/480)	36 HP/s	8-12	None	15s
        5	380 (420/460/500)	38 HP/s	9-13	None	15s
        6	400 (440/480/520)	40 HP/s	9-14	None	15s
        7	420 (420/380/340)	42 HP/s	10-15	None	15s
        8	440 (480/520/560)	44 HP/s	11-16	None	15s
        9	460 (500/540/580)	46 HP/s	12-17	None	15s
        10	480 (520/560/600)	48 HP/s	12-18	None	15s`,
    },
    "Prince Denas": {
      name: "Prince Denas",
      imgSmall: "40c7Zhc",
      imgBig: "40ej9BZ",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "SYBARITE",
          imgFirst: "3QwmLfB",
          imgLast: "3QvgG2M",
          subName: `(kích hoạt, thời gian hồi chiêu: 22 giây) (2/2/2 điểm anh hùng)`,
          describe: `Prince Denas ăn một bữa ăn nhẹ đầy năng lượng, tự hồi phục 80/160/240 máu.`,
        },
        {
          name: "CELEBRITY",
          imgFirst: "3QdC3EE",
          imgLast: "3s4xgNM",
          subName: `(Người nổi tiếng) ( kích hoạt, thời gian hồi chiêu: 25 giây) (1/2/3 điểm anh hùng)`,
          describe: `Ngoại hình tuyệt đẹp của Prince Denas khiến kẻ thù khiếp sợ tới 3/6/9 trong tối đa 3/4/5 giây. <br/>
              Kỹ năng này cũng có thể làm choáng kẻ thù đang bay.`,
        },
        {
          name: "MIGHTY",
          imgFirst: "3QvgJeY",
          imgLast: "3Qtbwo7",
          subName: `(Phi thường)(kích hoạt, thời gian hồi chiêu: 18 giây) (2/2/2 điểm anh hùng)`,
          describe: `Một đòn tấn công tàn khốc của Prince Denas gây 70-134 / 122-226 / 171-320 sát thương chuẩn.`,
        },
        {
          name: "AVENGER",
          imgFirst: "3s2sJLN",
          imgLast: "3SdIc69",
          subName: `(Báo thù)(kích hoạt, thời gian hồi chiêu: 15 giây) (2/2/2 điểm anh hùng)`,
          describe: `Prince Denas ném khiên của mình, tấn công tối đa 3/4/5 lần, gây 20-36 / 26-46 / 30-52 sát thương chuẩn mỗi đòn. <br/>
              Chiếc khiên thực sự tấn công 4/5/6 lần.`,
        },
        {
          name: "SWORN DEFENDERS",
          imgFirst: "474PNZe",
          subName: `(Người bảo vệ tuyệt vời)(kích hoạt, thời gian hồi chiêu: 60 giây) (4/4/4 điểm anh hùng)`,
          describe: `Prince Denas kêu gọi 2/3/4/5 thành viên của Kingsguard hỗ trợ anh ta trong 25 giây để chiến đấu với lũ ác quỷ. <br/>
              Trên iOS, Sworn Defenders không có áo giáp. [Giáp: Trung bình nhưng giáp thật của họ là Không có (0%)]`,
          table: `HP	Damage (1.0s)	Giáp
              200	4-12	Medium (40%)<br />"On IOS: None (0%)"`,
          tableImg: "3ScSDak",
        },
      ],
      stats: `Level	HP	Hồi Máu	Damage (1.0s)	Giáp	Hồi sinh
        1	265	18 HP/s	10-14	Medium (40%)	15s
        2	280	19 HP/s	11-17	Medium (40%)	15s
        3	295	20 HP/s	12-19	Medium (40%)	15s
        4	310	21 HP/s	14-21	Medium (40%)	15s
        5	325	22 HP/s	15-23	Medium (50%)	15s
        6	340	23 HP/s	17-25	Medium (55%)	15s
        7	355	24 HP/s	18-27	Medium (57.5%)	15s
        8	370	25 HP/s	20-30	Medium (60%)	15s
        9	385	26 HP/s	21-32	Medium (62.5%)	15s
        10	400	27 HP/s	23-34	High (65%)	15s`,
    },
    Xin: {
      name: "Xin",
      imgSmall: "476Lcpp",
      imgBig: "473iohr",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "DARING STRIKE",
          imgFirst: "474oy0Q",
          imgLast: "3tTzqQD",
          subName: `(Đòn đánh táo bạo)( kích hoạt, thời gian hồi chiêu: 18 giây ) (3/3/3 điểm anh hùng)`,
          describe: `Trong chớp mắt, Xin tấn công kẻ địch mạnh nhất, gây 100-140/160-250/230-350 sát thương chuẩn và làm choáng nó trong 1 giây. Anh ta cũng gây 12-24 sát thương vật lý cho kẻ địch bị chặn.`,
        },
        {
          name: "INSPIRE",
          imgFirst: "45KpW7x",
          imgLast: "476nadR",
          subName: `(Truyền cảm hứng)( kích hoạt, thời gian hồi chiêu: 16 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Tiếng gầm giận dữ của Xin truyền cảm hứng cho các đồng minh gần đó gây sát thương cận chiến gấp đôi trong 3/5/7 giây.`,
        },
        {
          name: "MIND OVER BODY",
          imgFirst: "3SbbLFy",
          imgLast: "46GYdpD",
          subName: `(Tâm trên cơ thể)( kích hoạt, hồi chiêu: 20 giây ) (1/1/1 điểm anh hùng)`,
          describe: `Xin uống thứ nước pha chế đặc biệt của mình, tự hồi phục 60/120/190 máu trong 4/6/9 giây.`,
        },
        {
          name: "PANDA STYLE",
          imgFirst: "46VNjwg",
          imgLast: "46E7Pl4",
          subName: `(Phong cách gấu trúc)( kích hoạt, thời gian hồi chiêu: 26 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Một kỹ thuật bí mật cổ xưa của Xin gây sát thương vật lý 30-55/55-100/80-140 cho tất cả kẻ địch ở gần.`,
        },
        {
          name: "PANDAMONIUM",
          imgFirst: "3s2D7mJ",
          subName: `( kích hoạt, thời gian hồi chiêu: 30 giây ) (4/4/4 điểm anh hùng)`,
          describe: `Gọi 4/5/6 chiến binh gấu trúc tấn công nhanh kẻ thù, mỗi chiến binh gây 120/160/180 sát thương chuẩn.`,
        },
      ],
      stats: `Level	HP	Hồi Máu	Damage (1.5s)	Giáp	Hồi sinh
        1	330	22 HP/s	10-14	Low (25%)	20s
        2	360	24 HP/s	11-17	Low (25%)	20s
        3	390	26 HP/s	13-20	Low (25%)	20s
        4	420	28 HP/s	15-23	Low (25%)	20s
        5	450	30 HP/s	17-25	Low (25%)	20s
        6	480	32 HP/s	19-28	Low (25%)	20s
        7	510	34 HP/s	20-31	Low (25%)	20s
        8	540	36 HP/s	22-33	Low (25%)	20s
        9	570	38 HP/s	24-36	Low (25%)	20s
        10	600	40 HP/s	25-40	Low (25%)	20s`,
    },
    Lynn: {
      name: "Lynn",
      imgSmall: "3S8ez6p",
      imgBig: "499rY4g",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "HEX FURY",
          imgFirst: "3tEa8G8",
          imgLast: "499gUnO",
          subName: `(kích hoạt, thời gian hồi chiêu: 16 giây) (4/4/4 điểm anh hùng)`,
          describe: `Lynn tấn công tối đa 2/4/6 lần, gây 120/240/360 sát thương chuẩn (60 sát thương mỗi đòn). Nếu mục tiêu bị nguyền rủa, nó sẽ gây thêm 40/80/120 sát thương *480 sát thương* (+20 sát thương mỗi đòn tấn công).`,
        },
        {
          name: "CURSE OF DESPAIR",
          imgFirst: "3tLtgCh",
          imgLast: "4958L3D",
          subName: `(Lời Nguyền Tuyệt Vọng)(kích hoạt, thời gian hồi chiêu: 18 giây) (2/2/2 điểm anh hùng)`,
          describe: `Lynn nguyền rủa tối đa 5 kẻ địch, giảm sát thương của chúng (-10%/-20%/-30%) và làm chậm tốc độ di chuyển của chúng (-30%/-40%/-50%) trong 4/6/8 giây. (Cần ít nhất 3 mục tiêu ở gần cô ấy để kích hoạt.)`,
        },
        {
          name: "WEAKENING CURSE",
          imgFirst: "491yZnL",
          imgLast: "3Q6NfCZ",
          subName: `(Lời nguyện suy yếu)(kích hoạt, thời gian hồi chiêu: 14 giây) (2/2/2 điểm anh hùng)`,
          describe: `Lynn giảm giáp của mục tiêu (-30%/-50%/-70%) và kháng phép (-30%/-50%/-70%) trong 4/6/8 giây. <br/>
              (Nó bị lỗi trên iPadOS ở chỗ nó đặt lại khả năng kháng phép của mục tiêu về 30%/50%/70%.)`,
        },
        {
          name: "CHARM OF MISFORTUNE",
          imgFirst: "3Q4HRjE",
          subName: `(Bùa bất hạnh)(nội tại) (1/1/1 điểm anh hùng)`,
          describe: `Có 15/30/45% khả năng đòn tấn công tiếp theo của kẻ thù sẽ trượt.`,
        },
        {
          name: "FATE SEALED",
          imgFirst: "3tMfhMy",
          subName: `(Phong ấn Định mệnh)(kích hoạt, thời gian hồi chiêu: 30 giây) (3/3/3 điểm anh hùng)`,
          describe: `Một lời nguyền gây 340/520/700 sát thương chuẩn* trong 5 giây. Mục tiêu phát nổ, gây 200/250/300 sát thương chuẩn diện rộng (diện tích: 150) nếu bị tiêu diệt. <br/>
              (*: Sát thương lời nguyền ít hơn một chút so với mô tả trên phiên bản iPadOS; 330/510/690)`,
        },
      ],
      stats: `Level	HP	Hồi Máu	Damage (1.0s)	Giáp	Hồi sinh
        1	350	26 HP/s	10-14	Low (20%)	18s
        2	370	28 HP/s	11-17	Low (20%)	18s
        3	390	30 HP/s	13-19	Low (20%)	18s
        4	410	31 HP/s	14-22	Low (20%)	18s
        5	430	32 HP/s	16-24	Low (20%)	18s
        6	450	33 HP/s	17-27	Low (22.5%)	18s
        7	470	35 HP/s	19-29	Low (25%)	18s
        8	490	37 HP/s	21-31	Low (30%)	18s
        9	510	38 HP/s	22-34	Medium (35%)	18s
        10	530	40 HP/s	24-36	Medium (40%)	18s`,
    },
    "Vez'nan": {
      name: "Vez'nan",
      imgSmall: "3QdK1xD",
      imgBig: "3Q2REGY",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "SOUL BURN",
          imgFirst: "409ZJy6",
          imgLast: "3sbInUX",
          subName: `(Đốt linh hồn)( kích hoạt, hồi chiêu: 35 giây ) (3/3/3 điểm tướng)`,
          describe: `Vez'nan làm tan rã bất kỳ kẻ thù nào hoặc kẻ thù có giá trị lên tới 250/500/750 máu.`,
        },
        {
          name: "MAGIC SHACKLES",
          imgFirst: "499hphG",
          imgLast: "497FTrh",
          subName: `(Xiềng xích ma thuật) ( kích hoạt, thời gian hồi chiêu: 20 giây ) (1/2/3 điểm anh hùng)`,
          describe: `Vez'nan bẫy tối đa 1/3/6 kẻ địch trong một chiếc lồng ma thuật gây 36 sát thương chuẩn trong 3 giây.`,
        },
        {
          name: "HERMETIC INSIGHT",
          imgFirst: "3QuPm3N",
          subName: `(Chia sẻ kín)( nội tại ) (1/1/1 điểm anh hùng)`,
          describe: `Tăng phạm vi tấn công và khả năng của Vez'nan thêm 10/20/30%.`,
        },
        {
          name: "ARCANE NOVA",
          imgFirst: "49atXFi",
          imgLast: "3seLNpY",
          subName: `( kích hoạt, thời gian hồi chiêu: 20 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Vez'nan tạo ra một vụ nổ ma thuật cực lớn gây sát thương phép thuật 28-52/46-86/64-120 diện tích, làm chậm (-50% tốc độ) kẻ địch bị dính vụ nổ trong 2 giây.`,
        },
        {
          name: "DARK PACT",
          imgFirst: "3FwS8Ao",
          subName: `( kích hoạt, thời gian hồi chiêu: 120 giây ) (4/4/4 điểm anh hùng)`,
          describe: `Triệu hồi một con quỷ hùng mạnh để chiến đấu với kẻ thù trong 30 giây. Sự xuất hiện của nó làm choáng kẻ địch ở gần trong 2/3/4/5 giây. <br/>
              Con quỷ gây sát thương chuẩn ở cả cận chiến và tầm xa.`,
          table: `Level	HP	Damage	Giáp
              0	666	30-50	None
              1	999	50-90	None
              2	1337	65-115	None
              3	1666	80-130	None`,
          tableImg: "3s7bGbj",
        },
      ],
      stats: `Level	HP	Hồi Máu(1.0s)	Damage xa (1.5s)	Damage gần (1.0s)	Giáp	Hồi sinh
        1	185	12 HP/s	11-32	?	None	20s
        2	200	13 HP/s	12-36	?	None	20s
        3	215	14 HP/s	14-41	?	None	20s
        4	230	15 HP/s	15-45	?	None	20s
        5	245	16 HP/s	17-50	9-13	None	20s
        6	260	17 HP/s	18-54	10-14	None	20s
        7	275	18 HP/s	20-59	10-16	None	20s
        8	290	19 HP/s	21-63	11-17	None	20s
        9	305	20 HP/s	23-68	12-18	None	20s
        10	320	21 HP/s	24-72	13-19	None	20s`,
    },
    Durax: {
      name: "Durax",
      imgSmall: "3tJK4cO",
      imgBig: "3FwkjiI",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "CRYSTALLITES",
          imgFirst: "3QuqQRf",
          imgLast: "3ScSOm0",
          subName: `(Tinh thể)( kích hoạt ) (thời gian hồi chiêu: 50 giây) (5/5/5 điểm anh hùng)`,
          describe: `Durax triệu hồi bản sao (hoặc các bản sao) có thể điều khiển của chính mình (1/1/2) để chiến đấu với kẻ thù trong 25/50/75 giây. <br/>
              (Hiện tại trên tất cả các nền tảng, chúng xuất hiện với các kỹ năng sẵn sàng sử dụng ngay lập tức. Trên phiên bản Steam, nhấn phím 6 để điều khiển bản sao. Nếu có 2 bản sao, hãy nhấn phím 6 để chuyển đổi điều khiển giữa chúng.)`,
        },
        {
          name: "ARMBLADE",
          imgFirst: "3FCyrXD",
          imgLast: "3SkxMSe",
          subName: `( kích hoạt ) (thời gian hồi chiêu: 22 giây) (1/1/2 điểm anh hùng)`,
          describe: `Durax chém đối thủ bằng cánh tay pha lê sắc bén của mình, gây sát thương chuẩn 60/100/180.`,
        },
        {
          name: "LETHAL PRISM",
          imgFirst: "3QvVIkq",
          imgLast: "3FxpvCW",
          subName: `(Lăng kính gây chết người) ( kích hoạt ) (thời gian hồi chiêu: 22 giây) (1/1/2 điểm anh hùng)`,
          describe: `Durax biến thành lăng kính hình chóp bắn ra 2/3/4* tia sét gây 20-40 / 25-45 / 35-55 sát thương chuẩn mỗi tia. <br/>
              Mô tả này không chính xác trên tất cả các phiên bản của trò chơi; Lethal Prism bắn 5 tia sét với tổng sát thương chuẩn là 175-275.`,
        },
        {
          name: "SHARD LANCE",
          imgFirst: "3Qw6as8",
          imgLast: "3QwrIVK",
          subName: `(text)( kích hoạt ) (thời gian hồi chiêu: 26 giây) (1/1/2 điểm anh hùng)`,
          describe: `Durax ném một ngọn giáo pha lê xiên một kẻ địch với 45/90/180 sát thương chuẩn.`,
        },
        {
          name: "SAPPHIRE FANGS",
          imgFirst: "3See62z",
          subName: `( kích hoạt ) (thời gian hồi chiêu: 45 giây) (3/3/3 điểm anh hùng)`,
          describe: `Triệu hồi những mũi nhọn sắc nhọn trên một khu vực gây sát thương chuẩn 300/400/800/1200, làm choáng chúng trong chốc lát. Kỹ năng này có thể gây sát thương lên một mục tiêu hoặc phân tán giữa các kẻ thù.<br/>(Mô tả sát thương không chính xác trên iOS.)`,
        },
      ],
      stats: `Level	HP	Hồi Máu	Damage (1.0s)	Giáp	Hồi sinh
        1	280	23 HP/s	8-12	None	21s
        2	300	25 HP/s	9-13	None	21s
        3	320	27 HP/s	10-15	None	21s
        4	340	28 HP/s	11-15	None	21s
        5	360	30 HP/s	12-18	None	21s
        6	380	32 HP/s	13-19	None	21s
        7	400	33 HP/s	14-21	None	21s
        8	420	35 HP/s	15-22	None	21s
        9	440	37 HP/s	16-24	None	21s
        10	460	38 HP/s	17-25	None	21s`,
    },
    Bravebark: {
      name: "Bravebark",
      imgSmall: "45FfsXe",
      imgBig: "3rWxKWh",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "ROOTSPIKES",
          imgFirst: "45NvDSa",
          imgLast: "407Myhi",
          subName: `(kích hoạt, thời gian hồi chiêu: 25 giây) (2/2/2 điểm anh hùng)`,
          describe: `Rễ nhọn mọc lên từ mặt đất gây sát thương vật lý 30-50 / 50-90 / 80-120.`,
        },
        {
          name: "OAKSEEDS",
          imgFirst: "3ScTcRu",
          imgLast: "40ajw0s",
          subName: `(Hạt sồi) (kích hoạt, hồi chiêu: 25 giây) (2/2/2 điểm anh hùng)`,
          describe: `Bravebark triệu hồi 2 Greenling chặn và chiến đấu với kẻ thù trong 20 giây.`,
          table: `Level	HP	Damage (1.0s)	Giáp
              1	50	2-4	None
              2	100	4-8	None
              3	150	6-12	None`,
          tableImg: "40ajB4g",
        },
        {
          name: "BRANCHBALL",
          imgFirst: "409ZTWe",
          imgLast: "406QbnL",
          subName: `(kích hoạt, thời gian hồi chiêu: 35 giây) (3/3/3 điểm anh hùng)`,
          describe: `Bravebark tóm lấy kẻ thù có 200 HP trở xuống/500 HP trở xuống/Bất kỳ mạng sống nào và ném nó ra khỏi sân khấu. <br/> Thành công rực rỡ!`,
        },
        {
          name: "SPRINGSAP",
          imgFirst: "409ZVNQ",
          imgLast: "3s7bXel",
          subName: `(nội tại, thời gian hồi chiêu: 35 giây) (1/2/3 điểm anh hùng)`,
          describe: `Khi máu dưới 30%, Bravebark quấn mình trong một cái kén, hồi máu cho bản thân và đồng minh xung quanh với 140/420/840 máu trong 2/3/4 giây.`,
        },
        {
          name: "NATURE'S WRATH",
          imgFirst: "40cYyOI",
          subName: `(Cơn thịnh nộ của thiên nhiên)(kích hoạt, thời gian hồi chiêu: 40 giây) (3/3/3 điểm anh hùng)`,
          describe: `Bao phủ dày đặc một khu vực rộng với 9/12/15 dây leo gai, mỗi dây gây 40/50/60 sát thương chuẩn và làm choáng kẻ địch trong 1 giây.`,
        },
      ],
      stats: `Level	HP	Damage (2.0s)	Giáp	Hồi Máu	Hồi sinh
        1	375	19-29	Low (20%)	12 HP/s	25s
        2	400	22-34	Low (20%)	14 HP/s	25s
        3	425	26-38	Low (20%)	16 HP/s	25s
        4	450	29-43	Low (20%)	18 HP/s	25s
        5	475	32-48	Low (20%)	20 HP/s	25s
        6	500	35-53	Low (25%)	22 HP/s	25s
        7	525	38-58	Low (30%)	24 HP/s	25s
        8	550	42-62	Low (32.5%)	26 HP/s	25s
        9	575	45-68	Medium (37.5%)	28 HP/s	25s
        10	600	48-72	Medium (40%)	30 HP/s	25s`,
    },
    Bruce: {
      name: "Bruce",
      imgSmall: "40cYA9i",
      imgBig: "3FwD3yI",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "SHARP CLAWS",
          imgFirst: "3tJB9Z0",
          imgLast: "45JOyh0",
          subName: `(Vuốt sắc) ( nội tại ) (3/3/3 điểm anh hùng)`,
          describe: `Mỗi đòn tấn công của Bruce có 10% khả năng gây chảy máu, gây 39/78/117 sát thương chuẩn trong 5 giây (3/6/9 sát thương mỗi 0,37 giây). Và các đòn tấn công của Bruce gây thêm 15/30/45 sát thương (vật lý) cho mục tiêu đang chảy máu.`,
        },
        {
          name: "KING'S ROAR",
          imgFirst: "3saw4Z2",
          imgLast: "3Qd6uuq",
          subName: `(Tiếng gầm của vua) ( kích hoạt ) (thời gian hồi chiêu: 20 giây) (2/2/2 điểm anh hùng)`,
          describe: `Tiếng gầm mạnh mẽ của Bruce làm choáng kẻ địch ở gần (tối thiểu 3, tối đa 6) trong 1/2/3 giây. Có thể tiếp cận kẻ thù đang bay.`,
        },
        {
          name: "LION'S FUR",
          imgFirst: "3Fw8dWV",
          subName: `(Lông sư tử) ( nội tại ) (1/1/1 điểm anh hùng)`,
          describe: `Tăng HP của Bruce thêm 30/60/90 điểm.`,
        },
        {
          name: "GRIEVOUS BITES",
          imgFirst: "3QuPyQz",
          imgLast: "45KhwNF",
          subName: `(Vết cắn đớn đau) ( kích hoạt ) (thời gian hồi chiêu: 20 giây) (1/2/3 điểm anh hùng)`,
          describe: `Bruce cắn kẻ địch được nhắm mục tiêu 3 lần, gây tổng cộng 60/150/285 sát thương chuẩn. Móng vuốt sắc nhọn không được áp dụng.`,
        },
        {
          name: "GUARDIAN LIONS",
          imgFirst: "3Qd6ydE",
          subName: `(Sư tử hộ mệnh) ( kích hoạt ) (thời gian hồi chiêu: 45 giây) (4/4/4 điểm anh hùng)`,
          describe: `Triệu hồi 2/3/4/5 Sư Tử, gây 180/210/240 sát thương chuẩn* mỗi con và vô hiệu hóa mục tiêu của chúng trong 3 giây. <br/>
              Mỗi con sư tử gây sát thương 200/350/500 cho trùm. <br/>
              *: Sát thương thực tế của mỗi con sư tử lên kẻ thù thông thường là 72/108/126/144 (32/96/112/128 trên iOS).`,
        },
      ],
      stats: `Level	HP	Hồi Máu	Damage (1.0s)	Giáp	Hồi sinh
        1	365	18 HP/s	12-18	Low (25%)	18s
        2	390	20 HP/s	16-24	Low (25%)	18s
        3	415	21 HP/s	20-30	Low (25%)	18s
        4	440	22 HP/s	24-36	Low (25%)	18s
        5	465	23 HP/s	28-41	Low (25%)	18s
        6	490	25 HP/s	30-45	Low (30%)	18s
        7	515	26 HP/s	32-49	Medium (35%)	18s
        8	540	27 HP/s	35-52	Medium (40%)	18s
        9	565	29 HP/s	37-56	Medium (45%)	18s
        10	590	30 HP/s	40-59	Medium (50%)	18s`,
    },
    Phoenix: {
      name: "Phoenix",
      imgSmall: "3SbcmHi",
      imgBig: "40ek1Xh",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "IMMOLATE",
          imgFirst: "3Qws9zm",
          subName: `(Thiêu sống) ( kích hoạt, thời gian hồi chiêu: 45 giây ) (3/3/3 điểm anh hùng)`,
          describe: `Phoenix lao xuống đất, gây sát thương vật lý 65-115 / 125-235 / 190-350 và chết trong quá trình đó. Kỹ năng này cũng sẽ kích hoạt nếu HP của Phoenix về 0 tại bất kỳ thời điểm nào bất kể thời gian hồi chiêu của kỹ năng.`,
        },
        {
          name: "PURIFICATION",
          imgFirst: "3QvhsNe",
          subName: `(Thanh lọc) ( nội tại ) (1/1/1 điểm anh hùng)`,
          describe: `Phoenix biến kẻ địch bị ngã gần đó thành tên lửa gây 15/25/35 sát thương chuẩn cho mỗi tên lửa. Kỹ năng này cũng hoạt động khi Phoenix chết.`,
        },
        {
          name: "BLAZING OFFSPRING",
          imgFirst: "3QuPFLZ",
          subName: `( kích hoạt; 22 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Phoenix bắn 2/3/4 tên lửa từ trái tim rực cháy của cô, mỗi tên gây 30-55/40-70/45-80 sát thương chuẩn.`,
        },
        {
          name: "RING OF FIRE",
          imgFirst: "3MhfXzY",
          subName: `(Vòng lửa)( kích hoạt; 30 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Phoenix truyền vào tòa tháp một vụ nổ rực lửa gây sát thương chuẩn 60/120/180 trong 6 giây cho tất cả kẻ địch trong phạm vi.`,
        },
        {
          name: "EMBER FIELD",
          imgFirst: "3SdKv9n",
          subName: ` ( kích hoạt; 18 giây ) (3/4/5 điểm anh hùng)`,
          describe: `Đặt một quả trứng nổ mất 2 giây để tự trang bị và gây sát thương chuẩn 55-105 / 120-220 / 200-400 trong một khu vực (diện tích: 100). Nhiều quả trứng có thể hoạt động đồng thời, mỗi quả kéo dài trong 200 giây.`,
        },
      ],
      stats: `Level	HP	Hồi Máu	Fire Damage (1.5s)	Giáp	Hồi sinh
        1	350	18 HP/s	16-24	None	5s
        2	370	19 HP/s	19-29	None	5s
        3	390	20 HP/s	22-33	None	5s
        4	410	21 HP/s	24-37	None	5s
        5	430	22 HP/s	27-41	None	5s
        6	450	23 HP/s	30-45	None	5s
        7	470	24 HP/s	33-49	None	5s
        8	490	25 HP/s	35-53	None	5s
        9	510	26 HP/s	38-57	None	5s
        10	530	27 HP/s	41-61	None	5s`,
    },
    Wilbur: {
      name: "Wilbur",
      imgSmall: "3s8EuQP",
      imgBig: "45FqwUl",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "M.A.D. MISSILES",
          imgFirst: "478acN3",
          subName: `(Tên lửa MAD) ( kích hoạt, thời gian hồi chiêu: 25 giây ) (3/3/3 điểm anh hùng)`,
          describe: `Wilbur phóng 2 tên lửa, mỗi tên lửa gây sát thương vùng nổ 28-40/56-80/84-120 (diện tích: 120).`,
        },
        {
          name: "SMOKESPITTER TX201",
          imgFirst: "470sXSn",
          subName: `(Máy phun khói TX201) ( kích hoạt, thời gian hồi chiêu: 16 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Wilbur giải phóng một đám mây khói làm chậm kẻ địch 20/40/60% trong 3/4/5 giây.`,
        },
        {
          name: "BOOM BOX MK.",
          imgFirst: "3Mc4guc",
          subName: `(Hộp Bom MK) ( kích hoạt, thời gian hồi chiêu: 22 giây ) (3/3/3 điểm anh hùng)`,
          describe: `Wilbur ném một hộp chứa 1/2/3 quả bom di chuyển và phát nổ, gây 110-155 sát thương chuẩn mỗi quả.`,
        },
        {
          name: "DWAAARPS ENGINE",
          imgFirst: "3MeSHm8",
          subName: ` ( nội tại ) (1/1/1 điểm anh hùng)`,
          describe: `Tăng tốc độ di chuyển của Wilbur (1,8) thêm 20/40/60%.`,
        },
        {
          name: "PEWPEW DRONES",
          imgFirst: "46PFskc",
          subName: `(Máy bay không người lái)( kích hoạt, thời gian hồi chiêu: 40 giây ) (3/3/3 điểm anh hùng)`,
          describe: `Gọi 4 máy bay không người lái tấn công kẻ địch, gây 128/192/256 sát thương chuẩn cho mỗi chiếc trong 8 giây.`,
        },
      ],
      stats: `Level	HP	Damage xa (0.8s)	Hồi máu	Giáp	Hồi sinh
        1	300	30-42	16 HP/s	None	30s
        2	330	33-48	18 HP/s	None	30s
        3	360	36-54	20 HP/s	None	30s
        4	390	39-60	21 HP/s	None	30s
        5	420	45-66	24 HP/s	None	30s
        6	450	48-72	25 HP/s	None	30s
        7	480	51-78	27 HP/s	None	30s
        8	510	54-84	28 HP/s	None	30s
        9	540	60-90	30 HP/s	None	30s
        10	570	63-96	31 HP/s	None	30s`,
    },

    Faustus: {
      name: "Faustus",
      imgSmall: "46YpBzT",
      imgBig: "471Je9M",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "DRAGON LANCE",
          imgFirst: "3SbMBqe",
          subName: `(Thương rồng)(kích hoạt, thời gian hồi chiêu: 25 giây) (2/2/2 điểm anh hùng)`,
          describe: `Một phép thuật rồng chết người của Faustus gây 100-185 / 175-330 / 255-470 sát thương chuẩn cho một mục tiêu.`,
        },
        {
          name: "TELEPORT RUNE",
          imgFirst: "46E8ymi",
          subName: `(Dịch chuyển cổ ngữ) (kích hoạt, thời gian hồi chiêu: 30 giây) (2/2/2 điểm anh hùng)`,
          describe: `Kích hoạt một sức mạnh cổ ngữ, Faustus dịch chuyển tối đa 2/4/6 kẻ thù cách 35 nút trở lại đường đi.`,
        },
        {
          name: "ENERVATION",
          imgFirst: "3rYqo4y",
          subName: `(Năng lượng)(kích hoạt, thời gian hồi chiêu: 20 giây) (1/2/3 điểm anh hùng)`,
          describe: `Một phong ấn phức tạp vô hiệu hóa 1/2/3 kỹ năng phép thuật của kẻ thù trong 6/8/12 giây.`,
        },
        {
          name: "LIQUID FIRE",
          imgFirst: "46YpFQ9",
          subName: `(Lửa lỏng) (kích hoạt, thời gian hồi chiêu: 40 giây / 60 giây trên iOS) (3/3/3 điểm anh hùng)`,
          describe: `Faustus thổi ra một ngọn lửa ma thuật tập trung đốt cháy mặt đất, gây sát thương diện tích 90/150/210 trong 6 giây. <br/>
                    *Được kích hoạt khi có 3 kẻ thù trở lên ở gần Faustus.`,
        },
        {
          name: "DRAGON RAGE",
          imgFirst: "3tNL9Ar",
          subName: `(Cơn thịnh nộ của Rồng) (kích hoạt, thời gian hồi chiêu: 40 giây) (3/3/3 điểm anh hùng)`,
          describe: `Gọi 3 con rồng con đốt cháy con đường, gây sát thương diện tích 90/150/210 mỗi con trong 6 giây.`,
        },
      ],
      stats: `Level	HP	Hồi Máu	Damage (1.2s)	Giáp	Hồi sinh
            1	400	20 HP/s	27-42	None	30s
            2	425	21 HP/s	33-48	None	30s
            3	450	23 HP/s	39-57	None	30s
            4	475	24 HP/s	45-66	None	30s
            5	500	25 HP/s	48-72	None	30s
            6	525	26 HP/s	54-81	None	30s
            7	550	28 HP/s	60-90	None	30s
            8	575	29 HP/s	66-99	None	30s
            9	600	30 HP/s	72-105	None	30s
            10	625	31 HP/s	75-114	None	30s`,
    },
    // 3 Skills Second Heroes Origins
    Alleria: {
      name: "Alleria",
      imgSmall: "475HiNA",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Multishot",
          imgLast: "495MFxW",
          describe: `Alleria bắn 3 mũi tên gây sát thương gấp ba lần. ( Thời gian hồi chiêu: 5 giây )`,
        },
      ],
    },
    Malik: {
      name: "Malik",
      imgSmall: "3Q98fc3",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Hammer Smash",
          imgLast: "49lfcjl",
          subName: `(Búa đập)`,
          describe: `Malik đập đất với sức mạnh cực lớn, gây sát thương chuẩn trong một khu vực nhỏ. (Thời gian hồi chiêu: 9 giây)`,
          table: `Level kỹ năng	Level anh hùng	Damage
            1	2	50
            2	5	100
            3	8	150`,
        },
        {
          name: "Earthquake",
          imgLast: "498Ahgt",
          subName: `(Động đất)`,
          describe: `Malik dậm mạnh xuống đất, làm choáng kẻ địch trong 2 giây và gây sát thương chuẩn diện rộng. (Thời gian hồi chiêu: 22 giây)`,
          table: `Level kỹ năng	Level anh hùng	Sát thương tối đa
            1	4	50
            2	7	100
            3	10	375`,
        },
      ],
      stats: `Level	HP	Damage cận chiến	Giáp	Hồi sinh
        1	320	11-17	None	15s
        2	345	12-18	None	15s
        3	370	13-20	None	15s
        4	395	14-21	None	15s
        5	420	15-23	None	15s
        6	445	16-24	None	15s
        7	470	17-25	None	15s
        8	495	18-27	None	15s
        9	520	19-28	None	15s
        10	545	20-30	None	15s`,
    },
    Bolverk: {
      name: "Bolverk",
      imgSmall: "494EO3F",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Battle Cry",
          imgLast: "40h73s0",
          subName: `(Trận chiến khóc) (Thời gian hồi chiêu: 10 giây)`,
          describe: `Nhân sát thương gây ra cho kẻ địch (tối thiểu 3 mục tiêu) gần Bolverk lên 1,5 trong 20 giây.`,
        },
        {
          name: "Twin Axes",
          imgLast: "3tOI6b9",
          subName: `(Trục đôi) (Thời gian hồi chiêu: 10 giây)`,
          describe: `Gây 80-100 sát thương vật lý cho một mục tiêu.`,
        },
      ],
    },

    // 20 Towers Vengeance
    "Shadow Archers": {
      name: "Shadow Archers",
      imgSmall: "45JQh5Y",
      imgBig: "40bJ9xL",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Shadow Mark",
          imgFirst: "3s4HMo2",
          imgLast: "3Seg5nx",
          subName: `(Dấu ấn bóng tối) "Số phận của bạn đã được phong ấn."`,
          describe: `Bắn một mũi tên đánh dấu mục tiêu, khiến mục tiêu chịu thêm sát thương từ mọi nguồn trong 5 giây. (Thời gian hồi chiêu: 20 giây) 
          Bản thân mũi tên không gây ra bất kỳ sát thương nào.`,
          table: `Level	Trị giá	Sát thương thêm
          1	120 (102)	+30%
          2	120 (102)	+60%
          3	120 (102)	+100%`,
          picture: "link",
        },
        {
          name: "Blade of Demise",
          imgFirst: "45JdIMz",
          imgLast: "45Kscf1",
          subName: `(Lưỡi dao diệt vong) "Ngay cả cái bóng của bạn cũng có thể phản bội bạn."`,
          describe: `Đâm kẻ thù† vào sau lưng và giết chết nó ngay lập tức.†: Không bao gồm <b>War Wagon</b> và trùm.`,
          table: `Level	Trị giá	Hồi chiêu
          1	300 (255)	40 giây
          2	100 (85)	30 giây
          3	100 (85)	24 giây`,
        },
        {
          name: "Crow's Nest",
          imgFirst: "45SREPS",
          imgLast: "45QE533",
          subName: `(Tổ quạ) "Những con chim độc ác và rất thông minh"`,
          describe: `Triệu hồi một con quạ để tấn công kẻ thù ở gần. Con quạ khóa chặt kẻ địch, gây sát thương vật lý.`,
          table: `Level	Trị giá	Sát thương (0,5s)
          1	200 (170)	1
          2	200 (170)	2`,
        },
      ],
      stats: `Towers\tLevel	Damage (Với nâng cấp)	Tốc đánh	Phạm vi	Chi phí
      imgArr	1	3-4 (3-4)	Fast (0.7s)	Average 300	80
      imgArr	2	7-11 (7-12)	Fast (0.7s)	Average 330	120
      imgArr	3	14-21 (15-23)	Fast (0.7s)	Long 360	190
      imgArr	4	23-34 (25-37)	Fast (0.7s)	Great 400	280`,
      imgArr: ["45P5ZfU", "3s4Aa58", "474SeLm", "3MgsGmx"],
      achievements: [
        {
          name: "THEY'RE COMING!",
          imgFirst: "495O6MQ",
          describe: `(30 viên đá quý) Làm cho những con quạ của bạn gây ra tổng lực sát thương là 30.000.`,
        },
      ],
    },
    "Orc Warriors Den": {
      name: "Orc Warriors Den",
      imgSmall: "3rWzTkN",
      imgBig: "3tLvOjP",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Bloodlust",
          imgFirst: "46KFERp",
          subName: `(Khát máu) "Đau? Tôi sẽ cho bạn thấy nỗi đau!"`,
          describe: `Orc nhận thêm sát thương. Bao gồm cả Đội trưởng Orc.`,
          table: `Level	Trị giá	Damage thưởng
          1	180 (153)	40%
          2	180 (153)	80%`,
        },
        {
          name: "Captain Promotion",
          imgFirst: "3tNMZkP",
          subName: `(Thăng cấp Đội trưởng) "Nghe này, chà!"`,
          describe: `Thăng cấp Chiến binh Orc lên Đội trưởng, cải thiện sát thương và HP của họ.`,
          table: `Trị giá	HP	Tỷ lệ hồi máu (mỗi 2 giây)	Damage (1.0 giây)	Giáp	hồi sinh
          150 (127)	600 (780)	0	56-63 (60-69)	Trung bình (50%)	12 giây`,
          tableImg: "495htyO",
        },
        {
          name: "Seal of Blood",
          imgFirst: "3FvmtiB",
          subName: `(Con dấu máu) "Cái này? Chỉ là một vết xước thôi."`,
          describe: `Chiến binh Orc nhận được khả năng hồi phục HP mỗi giây. Bao gồm cả Đội trưởng Orc.`,
          table: `Level	Trị giá	Sự tái tạo
          1	120 (102)	5
          2	120 (102)	10`,
        },
      ],
      stats: `Towers\tLevel	HP (Có nâng cấp)	Hồi máu (mỗi 2 giây)	Damage (1.0s) (Có nâng cấp)	Giáp	Chi phí
      imgArr	1	120 (156)	0	8-9 (8-9)	None	70
      imgArr	2	200 (260)	0	9-12 (9-12)	Low (10%)	110
      imgArr	3	300 (390)	0	20-21 (20-21)	Low (15%)	160
      imgArr	4	400 (520)	0	36-42 (36-45)	Low (20%)	230`,
      imgArr: ["3Q2U74c", "471LzS6", "3Fz3kwl", "3Q9qpuq"],
      achievements: [
        {
          name: "SHOW ME YOUR WAR FACE",
          imgFirst: "46JotQm",
          describe: ` (30 viên ngọc) Triệu hồi 50 Thuyền trưởng Orc.`,
        },
      ],
    },
    "Infernal Mage": {
      name: "Infernal Mage",
      imgSmall: "3QaL8xR",
      imgBig: "3MgXwvf",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Affliction",
          imgFirst: "3FwFhy4",
          subName: `(Phiền não) "Hãy chịu đựng cơn thịnh nộ của tôi!"`,
          describe: `Đặt một rune địa ngục trên đường đi, làm giảm giáp và kháng phép của kẻ thù trong 5 giây. Bao gồm các Boss. ( Thời gian hồi chiêu: 12 giây )`,
          table: `Level	Giá	Giảm đi
          1	150 (127)	25%
          2	150 (127)	50%`,
        },
        {
          name: "Lava Fissure",
          imgFirst: "46AAl7b",
          subName: `(Khe nứt dung nham) "Đốt thành tro!"`,
          describe: `Thi triển một phép thuật làm phun trào 8 mạch nham thạch, mỗi mạch gây sát thương phép trong một khu vực nhỏ (diện tích: 60). ( Thời gian hồi chiêu: 20 giây )`,
          table: `Level	Giá	Damage
          1	200 (170)	28-42
          2	200 (170)	56-84
          3	200 (170)	80-120`,
        },
        {
          name: "Infernal Portal",
          imgFirst: "45KsL8D",
          subName: `(Cổng địa ngục) "Trở lại nơi bạn đến."`,
          describe: `Dịch chuyển một nhóm kẻ thù 15 nút dọc theo đường đi. ( Thời gian hồi chiêu: 25 giây )`,
          table: `Level	Giá	Kẻ thù
          1	220 (187)	3-4
          2	220 (187)	3-6`,
        },
      ],
      stats: `Towers\tLevel	Sát thương phép thuật (Có nâng cấp)	Tốc độ bắn	Phạm vi	Chi phí xây dựng
      imgArr	1	5-16 (5-17)	Chậm (1,8s)	Ngắn 300	100
      imgArr	2	16-49 (17-53)	Chậm (1,8s)	Ngắn 315	180
      imgArr	3	33-100 (36-110)	Chậm (1,8s)	Trung bình 330	250
      imgArr	4	49-146 (53-160)	Chậm (1,8s)	Trung bình 350	300`,
      imgArr: ["407Fz87", "3FwFq4A", "3FASKok", "45EIlCQ"],
      achievements: [
        {
          name: "NUMBER OF THE BEAST",
          imgFirst: "407PbzG",
          describe: `(30 viên ngọc) | Dịch chuyển 666 kẻ thù.`,
        },
      ],
    },
    "Rocket Riders": {
      name: "Rocket Riders",
      imgSmall: "3s2FMNf",
      imgBig: "3QcfUGx",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Minefield",
          imgFirst: "3SfTEhI",
          subName: `(Bãi mìn) "Coi chừng bước đi của bạn!"`,
          describe: `Đặt một quả mìn phát nổ khi kẻ thù đi qua. Mỗi mỏ kéo dài 50 giây. (Thời gian hồi chiêu: 10 giây)`,
          table: `Level	Giá	Damage
          1	300 (255)	60
          2	300 (255)	125
          3	300 (255)	190`,
        },
        {
          name: "Nitro Boosters",
          imgFirst: "3MeT8N8",
          subName: `(Tăng cường Nitro) "Đạp vào kim loại!"`,
          describe: `Bắn một tên lửa tăng tầm bắn, bắn trúng mục tiêu ở xa. (Thời gian hồi chiêu: 15 giây)`,
          table: `Level	Giá	Phạm vi	Damage
          1	150 (127)	500	100
          2	150 (127)	500	180`,
        },
        {
          name: "Defective Engines",
          imgFirst: "45JRtGu",
          subName: `(Động cơ bị lỗi) "Chứng kiến cho tôi!"`,
          describe: `Bắn một tên lửa đẩy bằng nitro gây sát thương và có tầm bắn xa hơn. (Thời gian hồi chiêu: 22 giây)`,
          table: `Level	Giá	Damage
          1	250 (212)	22
          2	250 (212)	32`,
        },
      ],
      stats: `Towers\tLevel	Damage (Có nâng cấp)	Tốc độ bắn	Phạm vi	Chi phí xây dựng
      imgArr	1	7-10 (7-11) Rất chậm (3.0s)	Trung bình 330	120
      imgArr	2	20-29 (22-31) Rất chậm (3.0s)	Trung bình 350	210
      imgArr	3	40-58 (44-63) Rất chậm (3.0s)	Dài 370	310
      imgArr	4	64-92 (70-101) Rất chậm (2,8s)	Dài 390	370`,
      imgArr: ["45LAi76", "40bJS1X", "3tSicTH", "45NyjiG"],
      achievements: [
        {
          name: "2FAST 2FURIOUS",
          imgFirst: "40bK6Gl",
          describe: `(30 viên đá quý) Khởi động 500 Tay đua tên lửa chạy bằng Nitro.`,
        },
      ],
    },
    "Dark Knights": {
      name: "Dark Knights",
      imgSmall: "3rWAva5",
      imgBig: "3Seh6fl",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Brutal Strike",
          imgFirst: "3FscxGN",
          subName: `(Cuộc tấn công tàn bạo) "Ta là đao phủ của ngươi!"`,
          describe: `Hiệp sĩ bóng đêm có cơ hội xử tử kẻ thù mỗi khi tấn công.`,
          table: `Level	Trị giá	Cơ hội giết ngay lập tức
          1	280 (238)	2%
          2	280 (238)	4%
          3	280 (238)	6%`,
        },
        {
          name: "Armor of Thorns",
          imgFirst: "3rWAGSN",
          subName: `(Giáp gai) "Những gì bạn cho đi là những gì bạn nhận được!"`,
          describe: `Hiệp sĩ bóng đêm phản lại sát thương cho mỗi đòn tấn công cận chiến mà chúng nhận được.`,
          table: `Level	Trị giá	Damage
          1	150 (127)	15
          2	150 (127)	30
          3	150 (127)	45`,
        },
        {
          name: "Impervious",
          imgFirst: "45JJQjc",
          subName: `(Không thấm nước) “Bất động như núi.”`,
          describe: `Hiệp sĩ bóng đêm tự tạo lá chắn cho mình, chống lại đòn đánh mà không nhận sát thương. Không bao gồm các đòn tấn công của trùm. (Thời gian hồi chiêu: 15 giây)`,
          table: `Trị giá	Khoảng thời gian
          200 (170)	6 giây`,
        },
      ],
      stats: `Towers\tLevel	HP (Có Upgrade)	Hồi máu	Damage (1.0s) (Có Upgrade)	Giáp	Chi phí xây dựng
      imgArr	1	230 (299)	0	4-6 (4-6)	Medium (40%)	110
      imgArr	2	325 (422)	0	16-20 (17-22)	Medium (50%)	160
      imgArr	3	450 (585)	0	35-40 (38-44)	Medium (60%)	220
      imgArr	4	1680 (2184)	0	96-108 (105-118)\tHigh (75%)\t260`,
      imgArr: ["45GgTEF", "45KmdXG", "3QuICUr", "45EITZq"],
      achievements: [
        {
          name: "FEAST ON THIS!",
          imgFirst: "3tInHEB",
          describe: `(30 viên đá quý) Xử tử 81 kẻ thù bằng thanh kiếm cưa máy.`,
        },
      ],
    },
    "Melting Furnace": {
      name: "Melting Furnace",
      imgSmall: "3QvwR08",
      imgBig: "495c8rj",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Red Hot Coal",
          imgFirst: "46LZL1K",
          subName: `(Than nóng đỏ) "Hoàn hảo cho món nướng."`,
          describe: `Ném những mảnh than nóng cháy và gây tổng sát thương lên tới x cho kẻ địch đứng trên chúng. ( Thời gian hồi chiêu: 15 giây )`,
          table: `Level	Trị giá	Số lượng than	Tổng sát thương
          1	140 (119)	3	200
          2	180 (153)	5	320`,
        },
        {
          name: "Abrasive Heat",
          imgFirst: "3SfspUI",
          subName: `(Nhiệt mài mòn) "Nhân đôi!"`,
          describe: `Các tòa tháp gần đó nhận được tiền thưởng† sát thương tấn công.†: Có thể xếp chồng lên nhau.`,
          table: `Level	Trị giá	Sát thương thưởng
          1	200 (170)	15%
          2	200 (170)	30%`,
        },
        {
          name: "Burning Fuel",
          imgFirst: "3Sa68r5",
          subName: `(Đốt nhiên liệu)  “Đưa cho tôi khúc gỗ đó…”`,
          describe: `Tự truyền vào mình một loại nhiên liệu mạnh mẽ giúp tăng tốc độ tấn công trong 10 giây. (Thời gian hồi chiêu: 30 giây)
          Với việc nâng cấp, tháp xen kẽ giữa 5 đòn tấn công nhanh và 5 đòn tấn công chậm thông thường.
          ‡: Sát thương không bị ảnh hưởng bởi Kiến trúc sư bậc thầy hoặc Nhiệt mài mòn.
          `,
          table: `Trị giá	Tỷ lệ tấn công	Sát thương‡
          250 (212)	Rất chậm (2.0 giây)	41-50`,
        },
      ],
      stats: `Towers\tLevel	Sát thương (Có nâng cấp)	Tốc độ bắn	Choáng	Phạm vi	Chi phí xây dựng
      imgArr	1	5-7 (5-7)	Rất chậm (4.0 giây)	0,3 giây	Trung bình	120
      imgArr	2	14-18 (15-19)	Rất chậm (4.0 giây)	0,4 giây	Trung bình	190
      imgArr	3	25-31 (27-34)	Rất chậm (4.0 giây)	0,5 giây	Trung bình	240
      imgArr	4	41-50 (45-55)	Rất chậm (4.0 giây)	0,6 giây	Trung bình	300`,
      imgArr: ["476OyZx", "475KFnI", "46Jc3rK", "46HWlNC"],
      achievements: [
        {
          name: "PRESTO LOGS",
          imgFirst: "3tLx0Ul",
          describe: `(30 viên đá quý) Sử dụng nhiên liệu đốt tiên tiến trên lò của bạn 88 lần.`,
        },
      ],
    },
    "Specters Mausoleum": {
      name: "Specters Mausoleum",
      imgSmall: "494d7b7",
      imgBig: "496Jq9k",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Guardian Gargoyles",
          imgFirst: "494QhQO",
          subName: `(Gargoyle hộ mệnh) "Những người bảo vệ vĩnh cửu phục vụ bạn."`,
          describe: `Triệu hồi một đơn vị Gargoyle đặc biệt đến hiện trường.`,
          table: `HP	Sát thương (1.0 giây)	Tỷ lệ tấn công	Giáp	hồi sinh
          180 (234)	16-24	1.0 giây	Trung bình (60%)	15 giây`,
          tableImg: "3MeLpyP",
          table2: `Level	Trị giá	Số lượng
          1	250 (212)	1
          2	250 (212)	2`,
        },
        {
          name: "Spectral Communion",
          imgFirst: "474AsaV",
          subName: `(Hiệp thông quang phổ) "Chúng ta là quân đoàn."`,
          describe: `Cho phép Lăng chứa thêm bóng ma.`,
          table: `Level	Trị giá	Bóng ma tối đa
          1	300 (255)	4
          2	150 (127)	5`,
        },
        {
          name: "Possession",
          imgFirst: "475E7oO",
          subName: `(Chiếm hữu) "Tuân lệnh chúng tôi."`,
          describe: `Kiểm soát kẻ thù trong 10 giây, khiến nó tiến về hướng ngược lại và chiến đấu cho quân đội của bạn.`,
          table: `Level	Trị giá	Hồi chiêu
          1	200 (170)	23 giây
          2	100 (85)	20 giây
          3	100 (85)	17 giây`,
        },
      ],
      stats: `Towers\tLevel	Sát thương (Có nâng cấp)	Tốc độ bắn	Phạm vi	Chi phí xây dựng
      imgArr	1	5-8 (5-8)	Chậm (1,45 giây)	Trung bình	110
      imgArr	2	13-20 (14-22)	Chậm (1,45 giây)	Trung bình	130
      imgArr	3	26-38 (28-41)	Chậm (1,45 giây)	Trung bình	170
      imgArr	4	48-71 (52-78)	Chậm (1,45 giây)	Trung bình	230`,
      imgArr: ["475igOe", "474AwaF", "3SfsCHu", "3Q6QH0p"],
      achievements: [
        {
          name: "DEFENDERS OF THE NIGHT",
          imgFirst: "3tQvjoM",
          describe: `(30 viên ngọc) Triệu hồi 13 Gargoyles.`,
        },
      ],
    },
    Goblirangs: {
      name: "Goblirangs",
      imgSmall: "3Q98zHV",
      imgBig: "46MmdIe",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Biggarangs",
          imgFirst: "46KNlXO",
          subName: `("Hãy nhìn kích thước của vẻ đẹp này!")`,
          describe: `Ném một chiếc boomerang khổng lồ gây sát thương trong phạm vi 70. ( Thời gian hồi chiêu: 12 giây )`,
          table: `Level	Trị giá	Sát thương
          1	200 (170)	27-49
          2	100 (85)	32-60
          3	100 (85)	43-81`,
        },
        {
          name: "Headbang",
          imgFirst: "3Mc7duM",
          subName: `(Đập đầu) "Ow! Chắc đau lắm!"`,
          describe: `Các đòn tấn công của Goblirang có cơ hội làm choáng mục tiêu trong 1,2 giây sau mỗi đòn đánh.`,
          table: `Level	Trị giá	Cơ hội gây choáng
          1	130 (110)	5%
          2	130 (110)	10%
          3	130 (110)	15%`,
        },
        {
          name: "Angry Bees",
          imgFirst: "40an8zy",
          subName: `(Những con ong giận dữ) "Sinh ra từ loài ong hoang dã."`,
          describe: `Ném một tổ ong, gây sát thương vật lý trong một khu vực nhỏ (80) và kẻ địch ở gần trong 7 giây. ( Thời gian hồi chiêu: 18 giây )`,
          table: `Level	Trị giá	Sát thương tối đa
          1	200 (170)	120
          2	200 (170)	230*
          3	200 (170)	345*`,
        },
      ],
      stats: `Towers\tLevel	Sát thương*	Tốc độ bắn	Phạm vi	Chi phí xây dựng
      imgArr	1	3-5 (3-5)	Chậm (1,4 giây)	Dài	90
      imgArr	2	7-14 (7-15)	Chậm (1,4 giây)	Dài	140
      imgArr	3	14-26 (15-28)	Chậm (1,4 giây)	Dài	200
      imgArr	4	25-47 (27-51)	Chậm (1,4 giây)	Dài	270`,
      imgArr: ["45Kkq51", "40enIMD", "3s8HNYf", "3Qvshz3"],
      achievements: [
        {
          name: "NOT THE BEES!",
          imgFirst: "474AEqF",
          describe: `(30 viên đá quý) Tiêu diệt 200 kẻ thù bằng tổ ong.`,
        },
      ],
    },
    "Bone Flingers": {
      name: "Bone Flingers",
      imgSmall: "3QsJB7E",
      imgBig: "45LWY7i",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "The Walking Dead",
          imgFirst: "3QsJKbc",
          subName: `(Xác sống) "Không bao giờ ngừng bước đi"`,
          describe: `Sinh ra một Skeleton/Skeleton Warrior vụng về đi qua con đường.
          Nếu kẻ thù ở trong phạm vi, hãy xuất hiện ngay trước mặt kẻ thù. Kẻ địch sẽ ngừng di chuyển trong hoạt ảnh sinh sản để giao chiến.
          Nếu có nhiều đường dẫn trong phạm vi, hãy chọn ngẫu nhiên một đường để di chuyển.
          *: Khẩu phần chiến tranh không tăng sức khỏe của họ.
          `,
          table: `Level	Trị giá	HP*	Sát thương (1.0 giây)	Giáp	Hồi chiêu
          <img src="3SdO7It" alt="Bone Flingers 1"/>	1	180 (153)	80	cận chiến10-20	Không có	16 giây
          <img src="3FCBZcp" alt="Bone Flingers 2"/>	2	180 (153)	160	cận chiến15-25	Không có	12 giây`,
        },
        {
          name: "Got Milk?",
          imgFirst: "3Sbg3g8",
          subName: `(Có sữa?) "Sữa giúp xương chắc khỏe hơn"`,
          describe: `Tăng sát thương tấn công cơ bản thêm 5 trên mỗi lần nâng cấp.`,
          table: `Level	Trị giá	Sát thương cơ bản mới
          1	110 (93)	19-39 (20-42)
          2	110 (93)	24-44 (26-48)
          3	110 (93)	29-49 (31-53)`,
        },
        {
          name: "Summon Bonem",
          imgFirst: "3ShgW6T",
          subName: `(Triệu hồi Bonem) "Đó là một cái xương lớn để nhai"`,
          describe: `Triệu hồi một con golem xương khổng lồ sẽ chiến đấu và bắn kẻ thù`,
          table: `Trị giá	HP	Sát thương cận chiến (1,3s)	Sát thương tầm xa (1,0s)	Giáp	hồi sinh
          300 (255)	300 (390)	17-41	17-31	Không có	10 giây`,
          tableImg: "3Qdaqvc",
        },
      ],
      stats: `Towers\tLevel	Sát thương (Có nâng cấp)	Tốc độ bắn	Phạm vi	Chi phí xây dựng
      imgArr	1	2-4 (2-4)\tNhanh (0,6s)	Ngắn	60
      imgArr	2	5-11 (5-12)\tNhanh (0,6s)	Ngắn	110
      imgArr	3	20-9 (9-22)\tNhanh (0,6s)	Ngắn	150
      imgArr	4	14-34 (15-37)\tNhanh (0,6s)	Ngắn	180`,
      imgArr: ["460GSXT", "3MeWuji", "3FwDRDz", "3QaN5dF"],
      achievements: [
        {
          name: "THE SKELETON WAR",
          imgFirst: "3s6qN4Q",
          describe: `(30 viên đá quý) Sinh ra 500 chiến binh bộ xương để chiến đấu.`,
        },
      ],
    },
    "Elite Harassers": {
      name: "Elite Harassers",
      imgSmall: "3QvtqGR",
      imgBig: "3Qw0n5U",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Backstab",
          imgFirst: "3Mkopyf",
          subName: `(Đâm sau lưng) "Lưỡi dao của tôi trên người bạn!"`,
          describe: `Cải thiện cơ hội né tránh và cho phép Elite Harassers phản công bằng cách né đòn tấn công cận chiến của kẻ thù.`,
          table: `Level	Chi phí	Cơ hội né tránh
          1	180 (144)	20-30	40%
          2	180 (144)	40-60	50%`,
        },
        {
          name: "Arrow Storm",
          imgFirst: "3s7YTFK",
          subName: `(Cơn bão mũi tên) "Biến bầu trời thành màu đen"`,
          describe: `Nhanh chóng bắn 5 mũi tên vào kẻ thù. (Thời gian hồi chiêu: 12 giây)`,
          table: `Level	Trị giá	Sát thương mỗi mũi tên
          1	140 (119)	16-24
          2	140 (119)	32-48
          3	140 (119)	48-72`,
        },
        {
          name: "Fury of the Twilight",
          imgFirst: "3SbWqo8",
          subName: `(Cơn thịnh nộ của Twilight) "Tấn công với sự tức giận dữ dội"`,
          describe: `Khi Twilight chết, chúng có 50% khả năng nổi điên trong 6 giây.`,
          table: `Trị giá	HP	Sát thương (0,5s)	Giáp
          220 (187)	250	32-48	Không có`,
          tableImg: "3rYv7Dk",
        },
      ],
      stats: `Towers\tLevel	HP (Có nâng cấp)	Hồi máu	Sát thương (Có nâng cấp)	Giáp	Chi phí xây dựng
      imgArr	1	140 (182)	0	10-14 (10-14)	None	60
      imgArr	2	260 (338)	0	20-26 (22-28)	None	120
      imgArr	3	320 (416)	0	45-50 (48-54)	None	180
      imgArr	4	440 (572)	0	50-70 (54-76)	None	230`,
      imgArr: ["45LonXb", "3SbRtf0", "45P8zT8", "409T32Z"],
      achievements: [
        {
          name: "ULTRA INSTINCT",
          imgFirst: "3S85NFu",
          describe: ` (30 viên ngọc) Khiến Elite Harassers né tránh 800 đòn tấn công`,
        },
      ],
    },
    "Orc Shaman": {
      name: "Orc Shaman",
      imgSmall: "3tRUXJs",
      imgBig: "45QGwmd",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Healing Roots",
          imgFirst: "406Vjbv",
          subName: `(Rễ chữa bệnh) "100% hữu cơ"`,
          describe: `Lấp đầy một khu vực có rễ chữa bệnh. Đồng minh ở trên đó sẽ hồi máu trong 4 giây. (Thời gian hồi chiêu: 16 giây)
          Yêu cầu 2 mục tiêu có dưới 50% HP tương ứng.`,
          table: `Level	Trị giá	HP đã được chữa lành**
          1	130 (110)	20 HP
          2	130 (110)	40 HP
          3	130 (110)	60 HP`,
        },
        {
          name: "Meteor Shower",
          imgFirst: "408Ma1Y",
          subName: `(Mưa sao băng) "Đứng dưới ô của tôi."`,
          describe: `Tạo một trận mưa sao băng gây sát thương phép trong một khu vực. (Thời gian hồi chiêu: 20 giây)
          Yêu cầu 2 mục tiêu để kích hoạt.`,
          table: `Level	Trị giá	sao băng	Sát thương trên mỗi thiên thạch
          1	200 (170)	4	18-33
          2	200 (170)	5	28-52
          3	200 (170)	6	35-65`,
        },
        {
          name: "Static Shock",
          imgFirst: "46JdC96",
          subName: `(Sốc tĩnh) "Orc! Sử dụng Thunderbolt!"`,
          describe: `Mỗi đòn tấn công giờ gây thêm sát thương phép trong một khu vực nhỏ (Vùng sát thương: 120).`,
          table: `Level	Trị giá	Sát thương
          1	180 (153)	3-13
          2	180 (153)	6-26
          3	180 (153)	10-38
          `,
        },
      ],
      stats: `Towers\tLevel	Sát thương (Có nâng cấp)	Tốc độ bắn	Choáng	Phạm vi	Chi phí xây dựng
      imgArr	1	4-20 (4-22)	2,3 giây	0,66s	Long	130
      imgArr	2	10-55 (11-60)	2,3 giây	0,66s	Long	190
      imgArr	3	20-110 (22-121)	2,3 giây	0,66s	Long	260
      imgArr	4	35-190 (38-209)	2,3 giây	0,66s	Long	320`,
      imgArr: ["3MfhhTK", "491DeQd", "495r5cR", "3QyaYgR"],
      achievements: [
        {
          name: "THUNDERSTRUCK",
          imgFirst: "3tOM8jN",
          describe: `(30 viên ngọc) Gây tổng cộng 5000 sát thương cho kẻ địch bằng đòn tấn công cơ bản.`,
        },
      ],
    },
    "Grim Cemetery": {
      name: "Grim Cemetery",
      imgSmall: "3Mf5vIZ",
      imgBig: "494Jfvl",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Cold Grip",
          imgFirst: "45NVQAd",
          subName: `(Tay cầm lạnh) "Bám"`,
          describe: `Tạo ra một khu vực đầy những bàn tay nắm chặt, làm chậm kẻ địch trên đó trong 4 giây.`,
          table: `Level	Trị giá	Chậm lại	Hồi chiêu
          1	130 (110)	30%	15 giây
          2	130 (110)	60%	12 giây`,
        },
        {
          name: "ZombieX Muscle-Gain",
          imgFirst: "3SfVYoW",
          subName: `(Tăng cơ ZombieX) "Sự bổ sung tốt nhất cho lợi nhuận"`,
          describe: `Cải thiện zombie của bạn, mang lại cho chúng nhiều HP hơn và thêm sát thương.`,
          table: `Trị giá	HP	Sát thương (1.0 giây)	Giáp
          150 (127)	300 (390)	7-13	Không có`,
          tableImg: "46KeutZ",
        },
        {
          name: "Bloated Corpses",
          imgFirst: "3FuPzi3",
          subName: `(Xác chết cồng kềnh) "Zombie thích tacos cay"`,
          describe: `Cứ sau 12 giây, Zombie sinh ra từ kẻ địch bị tiêu diệt sẽ phát nổ khi chết, gây sát thương phép (cả sát thương tức thời và sát thương độc).‡: Sát thương độc được gây ra trong 3 giây (3 sát thương mỗi 0,33 giây).`,
          table: `Level	Trị giá	Sát thương tức thời	Độc hại‡
          1	110 (93)	15	27
          2	110 (93)	60	27`,
        },
      ],
      stats: `Towers\tLevel	HP (Có nâng cấp)	Sát thương (1.0 giây)	Giáp	Sinh sản	Chi phí xây dựng
      imgArr	1	85 (110)	1-2	Không có	12 giây	70
      imgArr	2	130 (169)	2-4	Không có	12 giây	110
      imgArr	3	180 (234)	3-6	Không có	12 giây	150
      imgArr	4	240 (312)	4-10	Không có	15 giây	200`,
      imgArr: ["499nbjm", "3Sa86aX", "3tHykY9", "49jbyq6"],
    },
    "Rotten Forest": {
      name: "Rotten Forest",
      imgSmall: "498KDgr",
      imgBig: "46Gfxvd",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Evil Treants",
          imgFirst: "3Mc97LW",
          subName: `(Treant độc ác) “Có phải cái cây đó vừa di chuyển không?”`,
          describe: `Sinh ra 2 Treant tấn công kẻ thù trong 10 giây.
          Máu của Treant giảm -5 HP mỗi 0,2 giây và không bị ảnh hưởng bởi War Rations.`,
          table: `HP	Sát thương (1.0 giây)	Giáp
          260	16-24	Không có`,
          tableImg: "3tFKgts",
          table2: `Level	Trị giá	Hồi chiêu
          1	200 (170)	18 giây
          2	100 (85)	13 giây`,
        },
        {
          name: "Roots of Evil",
          imgFirst: "3Fvpob3",
          subName: `(Nguồn gốc của cái ác) "Coi chừng gai."`,
          describe: `Quấy rối (tối thiểu 2, tối đa 5) kẻ thù bằng rễ cây, khiến chúng bất động trong một thời gian. (Thời gian hồi chiêu: 15 giây)`,
          table: `Level	Trị giá	Khoảng thời gian
          1	160 (136)	3 giây
          2	160 (136)	6 giây`,
        },
        {
          name: "Fog of Despair",
          imgFirst: "3SeY4Wi",
          subName: `(Sương mù tuyệt vọng) "Cẩn thận sương mù."`,
          describe: `Kẻ địch bị ảnh hưởng bởi sương mù có một chút khả năng trượt đòn tấn công của chúng.`,
          table: `Level	Trị giá	Bỏ lỡ cơ hội
          1	120 (102)	5%
          2	120 (102)	10%`,
        },
      ],
      stats: `Towers\tLevel	Sát thương	Tốc độ đốt	Chậm lại	Phạm vi	Chi phí xây dựng
      imgArr	1	2-2	Trung bình (1,0 giây)	20%	Short	120
      imgArr	2	3-3	Nhanh (0,65 giây)	20%	Short	140
      imgArr	3	4-4	Rất nhanh (0,5 giây)	30%	Short	190
      imgArr	4	5-5	Rất nhanh (0,4 giây)	30%	Short	220`,
      imgArr: ["3SbhIlS", "3tIqz4l", "46Jtvw2", "3rYvxto"],
    },
    "Shaolin Temple": {
      name: "Shaolin Temple",
      imgSmall: "45LZdaI",
      imgBig: "45MUHJl",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Dragon Warrior",
          imgFirst: "40cuFOv",
          subName: `(Chiến binh rồng) "Chúng tôi đã tìm thấy anh ấy!"`,
          describe: `Triệu tập một nhà sư thiếu lâm ưu tú vào con đường.`,
          table: `Trị giá	HP	Sát thương	Giáp	Tái sinh
          250 (212)	400 (520)	40-60	Không có	13 giây`,
          tableImg: "45JMfdI",
        },
        {
          name: "Lion of Abundance",
          imgFirst: "49aYtyP",
          subName: `("Sống lâu và thịnh vượng")`,
          describe: `Kẻ địch chết gần tháp thưởng thêm 10% vàng. Điều này được xếp chồng lên nhau giữa các tòa tháp, tức là tiền thưởng được nhân với 1,1 cho mỗi tòa tháp.`,
          table: `Level	Trị giá	Tăng
          1	100 (85)	10%`,
        },
        {
          name: "Shaolin Monks",
          imgFirst: "45NW7TL",
          subName: `(Nhà sư Thiếu Lâm) "Chào mừng em trai"`,
          describe: `Tăng số lượng tu sĩ, cho phép ngôi chùa khóa nhiều mục tiêu hơn cùng một lúc.`,
          table: `Level	Trị giá	Tăng (Tổng cộng)
          1	350 (297)	+1 (4)
          2	350 (297)	+1 (5)
          3	350 (297)	+1 (6)`,
        },
      ],
      stats: `Towers\tLevel	Sát thương*	Tỷ lệ tấn công	Phạm vi	Chi phí xây dựng
      imgArr	1	2-4	Trung bình		110
      imgArr	2	5-9	Trung bình		150
      imgArr	3	17-9	Trung bình		190
      imgArr	4	14-26	Trung bình		230`,
      imgArr: ["45NBgQi", "46Lb4Ho", "3tIr7ap", "3Qiz1iy"],
    },
    "Deep Devil's Reef": {
      name: "Deep Devil's Reef",
      imgSmall: "471nY3V",
      imgBig: "3tOB1ra",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Chosen of the Sea",
          imgFirst: "3MgBIzA",
          subName: `(Biển được chọn) "Chúng tôi là những chiến binh của vực sâu."`,
          describe: `Cải thiện số liệu thống kê của Redspines.`,
          table: `Chi phí(Có nâng cấp)	HP	Sát thương cận chiến (1,0 giây)	Sát thương tầm xa (0,9 giây)	Giáp	hồi sinh
          250 (212)	210 (258)	19-11	14-19	25%	12 giây`,
          tableImg: "47mLeJZ",
        },
        {
          name: "Net Throw",
          imgFirst: "3rWYSo1",
          subName: `(Ném lưới) "Rối."`,
          describe: `Redspines giờ đây có thể quăng lưới để bẫy kẻ thù trong thời gian ngắn.`,
          table: `Level	Chi phí (Có nâng cấp)	Chiều dài bẫy	Hồi chiêu
          1	150 (127)	2 giây	14 giây
          2	150 (127)	4 giây	12 giây`,
        },
        {
          name: "Perfect Storm",
          imgFirst: "3s4yJDB",
          subName: `(Cơn bão hoàn hảo) "Cảm nhận sấm sét."`,
          describe: `Triệu hồi một đám mây bao phủ kẻ địch và tấn công bằng 3 tia sét trong 5 giây. ( Thời gian hồi chiêu: 20 giây )`,
          table: `Level	Chi phí (Có nâng cấp)	Sát thương mỗi tia sét
          1	180 (153)	23
          2	180 (153)	47
          3	180 (153)	70`,
        },
      ],
      stats: `Towers\tLevel	Sát thương (Có nâng cấp)	Tốc độ bắn	Phạm vi	Chi phí xây dựng
      imgArr	1	4-12 (4-13)	Chậm (1,5 giây)	Ngắn 300\t120
      imgArr	2	34-11 (37-12)	Chậm (1,5 giây)	Ngắn 300\t170
      imgArr	3	23-68 (25-74)	Chậm (1,5 giây)	Ngắn 300\t240
      imgArr	4	40-120 (44-132)	Chậm (1,5 giây)	Ngắn 300\t330`,
      imgArr: ["3sbNLr9", "3tLzPEV", "3FtJ3s7", "49llS0T"],
    },
    "Ignis Altar": {
      name: "Ignis Altar",
      imgSmall: "3QyVYPS",
      imgBig: "3Q9tWZI",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Burning Elemental",
          imgFirst: "3QsLGAu",
          subName: `(Nguyên tố rực cháy) "Một mạng đổi một mạng!"`,
          describe: `Triệu hồi một nguyên tố Magma để chặn và chiến đấu với kẻ thù.`,
          table: `Trị giá	HP	Sát thương cận chiến	Giáp	Hồi sinh
          300 (255)	585	19-43	Không có	10 giây`,
          tableImg: "3QdRkFt",
        },
        {
          name: "Single Extinction",
          imgFirst: "3Q9u0Zs",
          subName: `"Nghệ thuật là một vụ nổ!"`,
          describe: `Khiến kẻ địch nhận thêm sát thương từ mọi nguồn. Khi kẻ địch đó chết, nó sẽ phát nổ và gây sát thương diện rộng.`,
          table: `Level	Chi phí (Có nâng cấp)	Sát thương tăng thêm	Sát thương vụ nổ
          1	180 (153)	50%	32
          2	100 (85)	75%	54
          3	100 (85)	100%	76`,
        },
        {
          name: "True Fire",
          imgFirst: "3Qv7ewr",
          subName: `(Lửa thật) "Cháy. Đốt!.. Đốt!!!"`,
          describe: `Mỗi đòn tấn công cơ bản sẽ để lại một vũng dung nham làm chậm kẻ địch tiếp xúc.`,
          table: `Level	Chi phí (Có nâng cấp)	Làm chậm
          1	190 (161)	50%`,
        },
      ],
      stats: `Towers\tLevel	Sát thương	Tỷ lệ tấn công trên mỗi vũng nước	Thời lượng vũng nước	Tốc độ bắn	Phạm vi	Chi phí xây dựng
      imgArr	1	2-2	0,4s	3,5s	Rất chậm (3,5s)\tNgắn	120
      imgArr	2	4-4	0,35s	3,5s	Rất chậm (3,5s)\tTrung bình	160
      imgArr	3	6-6	0,3s	3,5s	Rất chậm (3,5s)\tDài	220
      imgArr	4	8-8	0,2s	3,5s	Rất chậm (3,5s)\tDài	300`,
      imgArr: ["3QuUiXr", "3FtO7wq", "3s4Da1o", "3FAVC4A"],
    },
    "Blazing Gem": {
      name: "Blazing Gem",
      imgSmall: "3FwYn7d",
      imgBig: "475QjG8",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Gem of Amplification",
          imgFirst: "3Q4Od2u",
          subName: `(Đá quý khuếch đại) "Chỉ cần thêm một chút SỨC MẠNH"`,
          describe: `Cho phép Đá quý rực lửa đạt mức tích điện thứ 4, nhân sát thương được liệt kê với 4. Được biểu thị bằng đá quý chuyển sang màu tím.`,
          table: `Trị giá	Sát thương giai đoạn 4	Thời gian chuyển tiếp
          200 (170)	64-96 (70-105)	3,8 giây`,
        },
        {
          name: "Destructo-Ray",
          imgFirst: "3Q6TiYd",
          subName: `(Tia hủy diệt) "Biến đi!"`,
          describe: `Bắn ra một tia có thể giết chết kẻ thù ngay lập tức.`,
          table: `Level	Trị giá	Hồi chiêu
          1	250 (212)	25 giây
          2	200 (170)	23 giây
          3	150 (127)	20 tuổi`,
        },
        {
          name: "Unstable Power",
          imgFirst: "497vdJm",
          subName: `(Nguồn điện không ổn định) "Điều này sẽ làm bạn choáng váng"`,
          describe: `Mỗi kẻ địch bị giết bởi Đá quý rực lửa sẽ phát nổ, gây sát thương phép trong một khu vực nhỏ (Vùng sát thương: 100).`,
          table: `Level	Trị giá	Sát thương
          1	200 (170)	32-38
          2	200 (170)	63-77`,
        },
      ],
      stats: `Towers\tLevel	Sát thương Giai đoạn 1-3 (Có nâng cấp)	Tốc độ bắn	Phạm vi	Chi phí xây dựng
      imgArr	1	2-4 (2-4)<br/>4-8 (4-8)<br/>6-12 (6-13)	Rất nhanh 0,4s	Trung bình	140
      imgArr	2	6-9 (6-9)<br/>12-18 (13-19)<br/>18-27 (19-29)	Rất nhanh 0,4s	Trung bình	210
      imgArr	3	10-16 (11-17)<br/>20-32 (22-35)<br/>30-48 (33-52)	Rất nhanh 0,4s	Trung bình	240
      imgArr	4	16-24 (17-26)<br/>32-48 (35-52)<br/>48-72 (52-79)	Rất nhanh 0,4s	Trung bình	300`,
      imgArr: ["3Mc9Ixa", "499okra", "3FsF3rM", "3tIrz8B"],
    },
    "Wicked Sisters": {
      name: "Wicked Sisters",
      imgSmall: "3FsfqaB",
      imgBig: "471RJRX",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Froggification",
          imgFirst: "40epDkj",
          subName: `(Ếch hóa) "Ribbit."`,
          describe: `Biến kẻ địch thành một con ếch vô hại trong 6 giây.
          Kẻ thù đa hình có thể bị đánh chết và tặng vàng cho nó.`,
          table: `Level	Trị giá	Hồi chiêu
          1	230 (195)	22 giây
          2	180 (153)	18 giây`,
          tableImg: "3QuLi4r",
        },
        {
          name: "Hex Totem",
          imgFirst: "3Qwt0jx",
          subName: `(Vật tổ lục giác) "Tận hưởng sự im lặng."`,
          describe: `Triệu hồi một vật tổ khiến kẻ địch xung quanh nó im lặng trong 10 giây. (Thời gian hồi chiêu: 15 giây)`,
          table: `Trị giá	Phạm vi sử dụng
          180 (153)	280`,
        },
        {
          name: "Nimbus 4000",
          imgFirst: "409cXLy",
          subName: `"Chổi nhanh nhất từng được tạo ra."`,
          describe: `Tăng phạm vi di chuyển cho phù thủy chổi. (cơ bản: 250)`,
          table: `Level	Trị giá	Phạm vi
          1	100 (85)	350
          2	100 (85)	450`,
        },
      ],
      stats: `Towers\tLevel	Sát thương phép (Có nâng cấp)	Sát thương độc* (Có nâng cấp)	Tốc độ bắn	Phạm vi tấn công <br/>Phạm vi tập hợp	Chi phí xây dựng
      imgArr	1	25-11 (27-12)	7 (7)	Rất chậm 2,5s	300<br/>250	120
      imgArr	2	27-63 (29-69)	17 (18)	Rất chậm 2,5s	300<br/>250	160
      imgArr	3	48-112 (52-123)	30 (33)	Rất chậm 2,5s	300<br/>250	200
      imgArr	4	78-182 (85-200)	50 (55)	Rất chậm 2,5s	300<br/>250	250`,
      imgArr: ["3Qx683s", "3QwtdDl", "3QvuJpf", "40cvmaz"],
    },
    "Swamp Thing": {
      name: "Swamp Thing Tower",
      imgSmall: "45N1iU3",
      imgBig: "3S8kvfH",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Smash!",
          imgFirst: "3SbSmnQ",
          subName: `(Đập vỡ!) "Chuyện, ĐẬP!"`,
          describe: `Swamp Thing có một cơ hội nhỏ để giết mục tiêu chính của nó sau mỗi lần đánh.`,
          table: `Level	Chi phí (Có nâng cấp)	Cơ hội giết ngay lập tức
          1	140 (119)	2%
          2	140 (119)	4%
          3	140 (119)	6%`,
        },
        {
          name: "Blinding Liquid",
          imgFirst: "3SkDzHs",
          subName: `(Chất lỏng chói mắt) "Bây giờ bạn nhìn thấy tôi ..."`,
          describe: `Mỗi đòn tấn công có cơ hội làm choáng kẻ địch trong 3 giây.`,
          table: `Level	Chi phí (Có nâng cấp)	Cơ hội gây choáng
          1	120 (102)	20%
          2	120 (102)	40%
          3	120 (102)	60%`,
        },
        {
          name: "Carnivore",
          imgFirst: "45N1BhF",
          subName: `(Động vật ăn thịt) "A! Thịt tươi..."`,
          describe: `Mỗi khi Swamp Thing tiêu diệt kẻ thù, nó sẽ hồi phục 35% HP tối đa.`,
          table: `Level	Chi phí (Có nâng cấp)	Đã khôi phục HP
          1	80 (68)	1050`,
        },
      ],
      stats: `Towers\tLevel	Sát thương (Có nâng cấp)	Tốc độ bắn	Phạm vi	Chi phí xây dựng
      imgArr	1	19-21 (20-23)	Rất chậm 2,1s	370	120
      imgArr	2	38-42 (41-46)	Rất chậm 2,1s	430	150
      imgArr	3	65-71 (71-78)	Rất chậm 2,1s	500	210
      imgArr	4	90-100 (99-110)	Rất chậm 2,1s	600	290`,
      imgArr: ["409drRS", "3tJQiJI", "45IJA44", "46IJACp"],
    },
    "Goblin War Zeppelin": {
      name: "Goblin War Zeppelin",
      imgSmall: "3Se1k4i",
      imgBig: "471is18",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Tar Bomb",
          imgFirst: "3SbSZhc",
          subName: `(Bom hắc ín) "Dính!"`,
          describe: `Ném nhựa đường xuống đường, làm chậm kẻ địch giẫm phải nó trong 6 giây. Yêu cầu ít nhất 2 mục tiêu để kích hoạt. (Thời gian hồi chiêu: 15 giây)`,
          table: `Level	Trị giá	Chậm lại
          1	80 (68)	20%
          2	80 (68)	40%
          3	80 (68)	60%`,
        },
        {
          name: "Goblin Scout",
          imgFirst: "3seMxvj",
          subName: `(Trinh sát yêu tinh) "Tôi có thể nhìn thấy ngôi nhà của tôi từ đây!"`,
          describe: `Các tòa tháp gần Zeppelin có thêm phạm vi tấn công. Hào quang màu xanh lam hiển thị bên dưới các tòa tháp bị ảnh hưởng.`,
          table: `Trị giá	Phạm vi bổ sung
          250 (212)	20%`,
        },
        {
          name: "Paratroopers",
          imgFirst: "3seSb0q",
          subName: `(Lính nhảy dù) "Geronimo!"`,
          describe: `Triệu hồi một Goblin Sapper. (Thời gian hồi chiêu: 20 giây)`,
          table: `Trị giá	HP	Sát thương cận chiến và tầm xa (1s)	Giáp	Lifetime
          160 (136)	60	18-28	Không có	12 giây`,
          tableImg: "498M8ez",
        },
      ],
      stats: `Towers\tLevel	Sát thương	Tốc độ bắn	Phạm vi tấn công<br/>Phạm vi tập hợp	Chi phí xây dựng
      imgArr	1	6-12 (6-13)	Trung bình (1,36s)	210<br/>300\t160
      imgArr	2	16-32 (17-35)	Trung bình (1,36s)	210<br/>330	260
      imgArr	3	30-60 (33-66)	Trung bình (1,36s)	210<br/>360	300
      imgArr	4	50-100 (55-110)	Trung bình (1,36s)	210<br/>380	360`,
      imgArr: ["3Qdcwv4", "495TAqU", "46VV2dK", "3tNJ4Vb"],
    },

    // 3 Towers Special Vegeance
    "Troll Mercenaries": {
      name: "Troll Mercenaries",
      imgBig: "3Q9dSHd",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Troll Spear Hunter",
          subName: `(Thợ săn giáo Troll) (Lạnh giá!)`,
          describe: `Những chiến binh dũng mãnh có thể tái tạo vết thương nhanh chóng.`,
          table: `Giá	HP	Damage (1.0s)	Giáp	Tái tạo
          40	120 (156)	6-8	None	1HP/0.2s`,
          tableImg: "3QdYmtA",
        },
        {
          name: "Troll Axe Hunter",
          subName: `(Thợ săn rìu Troll) (Rìu-chấm dứt!)`,
          describe: `Các chiến binh bộ lạc ưu tú được trang bị rìu ném hung ác.`,
          table: `Giá	HP	Damage (1.0s)	Sát thương tầm xa (1.3s)	Giáp	Tái tạo
          80	180 (234)	15-20	8-12	None	1HP/0.2s`,
          tableImg: "3Qdi5K0",
        },
      ],
      achievements: [
        {
          name: "OH MY GOD!",
          imgFirst: "3QxdpzW",
          describe: `(30 viên đá quý) Thuê 5 Troll.`,
        },
      ],
    },
    "Spider Nest": {
      name: "Spider Nest",
      imgBig: "3s4LUV4",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Sticky Web",
          imgFirst: "3s5HDAR",
          subName: `(Dính!)`,
          describe: `Dệt một tấm lưới dính quanh tháp, làm chậm kẻ địch giẫm lên nó.`,
          table: `Trị giá*	Chậm lại
          220	20%`,
        },
        {
          name: "Spiderlings",
          imgFirst: "49b48Fl",
          subName: `(Nhện con) ( Người nhện tới rồi!`,
          describe: `Thêm trứng bổ sung, tối đa là ba.Sức khỏe của nhện suy giảm theo thời gian; -9 HP mỗi 2 giây.
          Cả chi phí và Sát thương đều không được hưởng lợi bởi Cây nâng cấp.
          `,
          table: `Level	Trị giá	Nhện con
          1	90	2
          2	90	3`,
          table2: `HP	Sát thương (1,0s)	Giáp	Hồi sinh
          90 (117)	30-50	Không có	15 giây`,
          tableImg2: "3QuVgTz",
        },
      ],
      achievements: [
        {
          name: "BROODMOTHER",
          imgFirst: "3tFMaKC",
          describe: `(30 viên ngọc) Sinh ra 200 con nhện con.`,
        },
      ],
    },
    Caravan: {
      name: "Caravan",
      imgBig: "474XIpq",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Bandit",
          describe: `(Tên cướp)`,
          table: `HP	Sát thương (0,6 giây)	Giáp
          180	7-12	None`,
          tableImg: "4741X4l",
        },
        {
          name: "Raider",
          describe: `(Phi cơ)`,
          table: `HP	Sát thương (1,0s)	Sát thương tầm xa (1,5s)	Giáp
          220	15-25	25-40	None`,
          tableImg: "409dU6A",
        },
        {
          name: "Marauder",
          describe: `(Kẻ cướp)`,
          table: `HP	Sát thương (2s)	Giáp
          380	40-60	Trung bình (60%)`,
          tableImg: "471PP42",
        },
      ],
      achievements: [
        {
          name: "SOLDIERS OF FORTUNE",
          imgFirst: "408ln5O",
          describe: `(30 viên đá quý) Thuê 50 lính đánh thuê.`,
        },
      ],
    },

    // 16 Heroes Vegeance
    Veruk: {
      name: "Veruk",
      imgSmall: "3tW45wE",
      imgBig: "49bf59C",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "AIMED SLASHES",
          imgFirst: "497LP3A",
          imgLast: "46HePxN",
          subName: `(Chém có mục đích) ( kích hoạt, thời gian hồi chiêu: 15 giây ) (3/3/3 điểm anh hùng)`,
          describe: `Một kỹ thuật nhanh chóng và mạnh mẽ. Veruk chém kẻ địch hai lần, gây 90/180/270 sát thương vật lý cho mục tiêu.
          Những đòn chém có chủ đích gây 135 sát thương vật lý mỗi nhát chém.`,
        },
        {
          name: "BRUTE FORCE",
          imgFirst: "3tKO1xU",
          imgLast: "3tRwSTq",
          subName: `( kích hoạt, thời gian hồi chiêu: 16/15/14 giây ) (1/2/3 điểm anh hùng)`,
          describe: `Veruk đập xuống đất, làm choáng kẻ địch ở gần trong 1/2/4 giây sau cú va chạm. (Khu vực choáng: 120 -- Cần tối thiểu 3 kẻ địch để thi triển, Tối đa 5 kẻ địch có thể bị choáng)`,
        },
        {
          name: "DUELIST",
          imgFirst: "499KY2r",
          imgLast: "40izxBx",
          subName: `(Đấu tay đôi)( bị động ) (2/3/4 điểm anh hùng)`,
          describe: `Trong khi chiến đấu, Veruk nhận thêm tới 24/60/108% sát thương tấn công cộng thêm miễn là anh ta chiến đấu với cùng một mục tiêu. Sát thương cơ bản tăng 8/20/36% mỗi tích tắc, tăng một tích tắc sau mỗi 5 giây. Phải mất 15 giây để đạt được mức tối đa.`,
        },
        {
          name: "INSPIRING LEADER",
          imgFirst: "496pZ0t",
          imgLast: "409i1Q0",
          subName: `(Thủ lĩnh truyền cảm hứng) ( kích hoạt, thời gian hồi chiêu: 20/18/15 giây ) (1/2/3 điểm anh hùng)`,
          describe: `Triệu hồi một cặp yêu tinh để hỗ trợ chiến đấu. Chúng tồn tại được 10 giây trên chiến trường.`,
          table: `Level	HP	Sát thương (1.0 giây)	Giáp
          1	35	3-5	None
          2	70	6-8	None
          3	100	8-11	None`,
          tableImg: `409Bgcq`,
        },
        {
          name: "ENTER THE WARMONGERS",
          heroSpell: true,
          imgFirst: "409ifqk",
          subName: `(text) ( kích hoạt, thời gian hồi chiêu: 40 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Kêu gọi một cặp chiến binh được đào tạo để hỗ trợ Veruk trên chiến trường. Chúng kéo dài 10 giây.`,
          table: `Level	HP	Sát thương tầm xa (1,0s)	Sát thương cận chiến (1,0s)	Giáp
          0	70	8-12	8-11	None
          1	100	16-24	14-10	None
          2	130	24-36	19-29	None
          3	180	28-42	29-43	None`,
          tableImg: `3sa8NGL`,
        },
        {
          name: "Thirst For War",
          imgFirst: "407UIGx",
          subName: `(Khát khao chiến tranh)`,
          describe: `Veruk hồi phục 1/2/3 HP mỗi giây ở Cấp độ Anh hùng 1/5/10. <br/>
          (Mô tả gây hiểu lầm trên thiết bị di động ở chỗ nó cho biết quá trình tái sinh sẽ kích hoạt khi Veruk cận kề cái chết.)`,
        },
      ],
      stats: `Level	HP	Hồi máu (mỗi 2s)\tDamage (1.0s)	Giáp\tHồi sinh
      1	200	20	4-11	Low (3%)	18s
      2	230	23	5-14	Low (6%)	18s
      3	260	26	6-17	Low (9%)	18s
      4	290	29	7-20	Low (12%)	18s
      5	320	32	8-23	Low (15%)	18s
      6	350	35	9-26	Low (18%)	18s
      7	380	38	10-29	Low (21%)	18s
      8	410	41	11-32	Low (24%)	18s
      9	440	44	12-35	Low (27%)	18s
      10	470	47	13-38	Low (30%)	18s`,
    },
    Asra: {
      name: "Asra",
      imgSmall: "3FwRgeX",
      imgBig: "3s8h7qy",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "SPIDER BITE",
          imgFirst: "3s5wIaf",
          imgLast: "3Qwr3Ud",
          subName: ` ( kích hoạt, thời gian hồi chiêu: 45 giây ) (5/4/3 điểm anh hùng)`,
          describe: `Tấn công kẻ địch trong phạm vi cận chiến (trừ Trùm) bằng chất độc cực mạnh gây 14/30/70 sát thương chuẩn mỗi giây và tồn tại vô thời hạn.
          (Tích tắc cứ sau 0,5 giây, gây 7/15/35 sát thương chuẩn với mỗi tích tắc -- Đòn tấn công cận chiến có tẩm chất độc được sửa đổi để chỉ gây 1 sát thương vật lý)`,
        },
        {
          name: "ONYX ARROWS",
          imgFirst: "3FxCZ1v",
          imgLast: "3Qw3r1V",
          subName: `(Mũi tên Onyx) ( kích hoạt, thời gian hồi chiêu: 18 giây ) (2/2/2 điểm anh hùng)/p>`,
          describe: `Bắn một loạt mũi tên 3/4/5 vào các mục tiêu gần đó, gây 20-30/28-42/36-54 sát thương phép cho mỗi mũi tên.<br/>
          (Phạm vi sử dụng: phạm vi 350, Tối thiểu 50 - Sát thương có thể tăng lên khi nâng cấp Đội quân Một người)`,
        },
        {
          name: "QUIVER OF SORROW",
          imgFirst: "3QwWyxk",
          subName: `(Mũi tên âu sầu) ( bị động ) (1/1/1 điểm anh hùng)`,
          describe: `Asra giảm vĩnh viễn Giáp của mục tiêu trúng đòn tấn công tầm xa của cô ấy đi 1/2/3 điểm. Hiệu ứng này có thể cộng dồn vô hạn và cũng có thể được áp dụng bởi " Onyx Arrows ". (Sẽ không giảm Giáp xuống dưới 0)`,
        },
        {
          name: "SHIELD OF SHADOWS",
          imgFirst: "3rWr3n6",
          imgLast: "3QyaaIw",
          subName: `(Khiên bóng tối) ( kích hoạt, thời gian hồi chiêu: 22 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Sau khi bị sát thương, Asra tạo ra một tấm khiên có sức mạnh 120/400/600 HP để bảo vệ cô khỏi những sát thương tiếp theo. Tấm khiên giảm 6/20/30 điểm sau mỗi 0,2 giây và tự hết hiệu lực sau 4 giây.`,
        },
        {
          name: "TOXIC RAIN",
          heroSpell: true,
          imgFirst: "3rXAOS1",
          subName: `(Mưa độc) ( kích hoạt, thời gian hồi chiêu: 50 giây ) (3/3/3 điểm anh hùng)`,
          describe: `Bắn tối đa 12 mũi tên trong một khu vực (Diện tích: 90), mỗi mũi tên đầu độc* kẻ địch ở gần nơi nó tấn công (Diện tích: 90), gây 40/60/120/200 sát thương chuẩn trong 2 giây. 
          (Chất độc gây 10/15/30/50 Sát thương chuẩn cứ sau 0,5 giây, trong 2 giây -- Chất độc sẽ không cộng dồn nếu kẻ địch bị trúng nhiều mũi tên, tuy nhiên nó sẽ được áp dụng lại, thường dẫn đến thêm 1 hoặc 2 mũi tên nữa dấu hiệu Sát thương)
          * Không bao gồm <b>Frozen Soul</b>, <b>Ghost</b> và <b>Carnival Dragon</b>.`,
        },
        {
          name: "SHADOW DANCE",
          imgFirst: "3Sf6MUm",
          subName: `(Vũ điệu bóng tối)`,
          describe: `Asra có thể dịch chuyển tức thời khi di chuyển quãng đường dài (Hơn 120 đơn vị).`,
        },
      ],
      stats: `Level	HP	Hồi máu (2.0s)	Damage (0.8s)	Sát thương tầm xa (1.0s)	Giáp\tHồi sinh
      1	100	10	6-9	7-11	Low (6%)	16s
      2	120	12	7-11	9-13	Low (7%)	16s
      3	140	15	8-12	10-16	Low (8%)	16s
      4	160	17	10-14	12-18	Low (9%)	16s
      5	180	20	11-16	14-20	Low (10%)	16s
      6	200	22	12-18	15-23	Low (11%)	16s
      7	220	25	13-20	17-25	Low (12%)	16s
      8	240	27	15-22	18-28	Low (13%)	16s
      9	260	30	16-24	20-30	Low (14%)	16s
      10	280	33	17-26	22-32	Low (15%)	16s`,
    },
    Oloch: {
      name: "Oloch",
      imgSmall: "3rZ7g6v",
      imgBig: "3SgSUsG",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "DUPLICATION",
          imgFirst: "3Sei23t",
          subName: `(Sao chép) ( kích hoạt, thời gian hồi chiêu: 25 giây ) (4/4/4 điểm anh hùng)`,
          describe: `Nếu kẻ địch ở trong phạm vi 400, Oloch tạo ra hai ảo ảnh về bản thân để tấn công kẻ địch ở gần. Ảo ảnh không thể bị nhắm mục tiêu bởi đòn tấn công của kẻ thù, có phạm vi tấn công 320 (tối thiểu 40), không thể chặn kẻ thù, gây sát thương phép thuật và tồn tại trong 6 giây.`,
          table: `Level\tHP	Sát thương tầm xa (1,6s)
          1\t150	10-20
          2\t200	16-48
          3\t300	24-72`,
        },
        {
          name: "MAGMA ERUPTION",
          imgFirst: "3rXTLnz",
          subName: `(Phun trào magma) ( kích hoạt, thời gian hồi chiêu: 25 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Thi triển một phép thuật địa ngục khiến các mạch nham thạch phun trào dưới sự tác động của tối đa 3/4/5 kẻ địch ở gần, mỗi kẻ gây 20/40/60 sát thương chuẩn trong một khu vực nhỏ (Diện tích: 40). Sau đó, các vũng magma tồn tại trên mặt đất trong 4 giây (Diện tích: 40), mỗi vũng gây 0/10/10 Sát thương Vật lý trong một giây.
          (Phạm vi sử dụng: 400 / Yêu cầu tối thiểu 2 kẻ thù -- Bể magma gây 0/1/1 sát thương vật lý cứ sau 0,1 giây / Dấu sát thương thực tế là 0,7/1,1/1,3, tuy nhiên trò chơi sẽ làm tròn chúng xuống con số nguyên gần nhất)`,
        },
        {
          name: "HELLISH INFUSION",
          imgFirst: "46BCkYV",
          subName: `(Truyền địa ngục) ( kích hoạt, thời gian hồi chiêu: 20 giây ) (1/2/3 điểm anh hùng)`,
          describe: `Oloch truyền vào tối đa 3 tòa tháp gần đó (Phạm vi: 300), gây thêm 10%/20%/30% sát thương cho chúng trong 6 giây.
          Không bao gồm các loại tháp Doanh trại thuần túy (chẳng hạn như <b>Orc Warriors Den</b>, nhưng sẽ KHÔNG loại trừ thứ gì đó như <b>Deep Devil's Reef</b> )`,
        },
        {
          name: "DEMONIC BLAST",
          imgFirst: "3S9g18B",
          subName: `(Vụ nổ ma quỷ) ( kích hoạt, thời gian hồi chiêu: 30 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Oloch triệu hồi một quả cầu lửa khổng lồ và ném nó vào mục tiêu, gây sát thương phép thuật 60-180/120-360/180-540.
          (Phạm vi sử dụng: 350 / Phạm vi tối thiểu: 50)`,
        },
        {
          name: "SEAL OF ISOLATION",
          heroSpell: true,
          imgFirst: "3SgSRx0",
          subName: ` ( kích hoạt, thời gian hồi chiêu: 30/27/24/20 giây ) (1/2/3 điểm anh hùng)`,
          describe: `Di chuyển kẻ thù trong khu vực lùi lại 15/25/35/45 nút. Tối đa 10 kẻ thù và không bao gồm trùm (Diện tích: 160)`,
        },
        {
          name: "INFERNAL COMBUSTION",
          imgFirst: "3SeJU7j",
          subName: `(Đốt cháy địa ngục)`,
          describe: `Khi Oloch chết, hắn phát nổ, gây 50/70/100 sát thương vật lý cho kẻ địch ở gần (Diện tích: 90). Sát thương tăng ở cấp 5 và 10.`,
        },
      ],
      stats: `Level	HP	Hồi máu (2.0s)	Damage (1.0s)	Sát thương tầm xa (1.8s)	Giáp\tHồi sinh
      1	150	15	1-3	4-8	None	18s
      2	165	16	2-4	7-12	None	18s
      3	180	18	3-5	10-17	None	18s
      4	195	19	4-7	12-21	None	18s
      5	210	21	4-8	13-25	None	18s
      6	225	22	5-9	16-29	None	18s
      7	240	24	6-10	18-33	None	18s
      8	255	25	6-12	20-37	None	18s
      9	270	27	7-13	22-42	None	18s
      10	285	28	8-14	25-46	None	18s`,
    },
    Margosa: {
      name: "Margosa",
      imgSmall: "476Nvc6",
      imgBig: "3FwmHpH",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "BAT FAMILIAR",
          imgFirst: "46ZtZhi",
          subName: `(Dơi thân thiện) ( bị động ) (3/3/3 điểm anh hùng)`,
          describe: `Triệu hồi một con dơi để giúp đỡ cô ấy. Dơi gây sát thương chuẩn.`,
          table: `Level	Damage (0.7s)
          1	3-7
          2	6-14
          3	9-21`,
        },
        {
          name: "MIST OF DESPAIR",
          imgFirst: "47nMpc7",
          subName: `(Sương mù tuyệt vời) ( kích hoạt, thời gian hồi chiêu: 20 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Margosa bao quanh mình trong một làn sương mù huyền diệu. Kẻ địch trong đó phải chịu sát thương lên tới 80/120/200 và có 25%/50%/75% khả năng trượt đòn tấn công trong 5 giây. (Mô tả không chính xác trên thiết bị di động.)`,
        },
        {
          name: "DARK CALL",
          imgFirst: "3tEueQz",
          subName: `(text) ( kích hoạt, thời gian hồi chiêu: 25 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Dịch chuyển kẻ địch trước mặt cô, cản trở việc tiến lên và làm choáng kẻ địch đó trong 2/3/4 giây.`,
        },
        {
          name: "VAMPIRIC TOUCH",
          imgFirst: "476NyVk",
          subName: `(Cái chạm Ma cà rồng) ( bị động ) (1/1/1 điểm anh hùng)`,
          describe: `Các đòn tấn công cơ bản của Margosa giờ sẽ hút máu kẻ địch, hồi máu cho cô bằng 20%/30%/50% sát thương gây ra.`,
        },
        {
          name: "BEAST FORM",
          heroSpell: true,
          imgFirst: "476FqDY",
          subName: `(Dạng thú) ( kích hoạt, thời gian hồi chiêu: 50 giây ) (4/4/4 điểm anh hùng)`,
          describe: `Margosa biến thành một con thú khát máu. Ở dạng quái thú, Margosa hồi máu bằng 80% sát thương gây ra. Sát thương được hưởng lợi bởi nâng cấp One Man Army`,
          table: `Level	HP	Damage (0.8s)	Tồn tại
          None	500	20-30 (23-34)	10s
          1	500	28-42 (32-48)	15s
          2	500	42-62 (48-71)	20s
          3	500	64-95 (73-109)	20s`,
          tableImg: "479bl6Z",
        },
        {
          name: "BAT FORM",
          imgFirst: "3Q8vxip",
          subName: `(Dạng Dơi)`,
          describe: `Biến hình thành một con dơi khi di chuyển quãng đường dài.`,
        },
      ],
      stats: `Level	HP	Hồi máu (mỗi 2s)	Damage (1.2s)	Giáp\tHồi sinh
      1	250	18	13-20	Low (6%)	18s
      2	270	19	16-24	Low (7%)	18s
      3	290	21	18-27	Low (8%)	18s
      4	310	22	20-30	Low (9%)	18s
      5	330	24	22-34	Low (10%)	18s
      6	350	25	25-37	Low (11%)	18s
      7	370	27	27-40	Low (12%)	18s
      8	390	28	29-44	Low (13%)	18s
      9	410	30	31-47	Low (14%)	18s
      10	430	31	34-50	Low (15%)	18s`,
    },
    Mortemis: {
      name: "Mortemis",
      imgSmall: "46ZwVuq",
      imgBig: "3MhZfjX",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "CALL OF THE HAUNTED",
          imgFirst: "3sa950j",
          subName: `(Cuộc gọi của người bị ma ám)( kích hoạt, thời gian hồi chiêu: 30 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Sử dụng những lời thì thầm dày vò của người chết, anh ta khiến kẻ thù phải bỏ chạy trong sợ hãi trong 6/7/8 giây.`,
        },
        {
          name: "ROTTEN LAND",
          imgFirst: "3MiLq4F",
          subName: `(Đất thối) ( kích hoạt, thời gian hồi chiêu: 20 giây ) (3/3/3 điểm anh hùng)`,
          describe: `Làm hỏng đất và tạo ra một vùng (vùng sát thương: 100) gây 1/2/3 sát thương phép mỗi 0,2 giây cho tất cả kẻ địch trong đó trong 10 giây.`,
        },
        {
          name: "GRIM PRESENCE",
          imgFirst: "3Mfq7B0",
          subName: `(Sự hiện diện nghiệt ngã) ( thụ động ) (1/1/1 điểm anh hùng)`,
          describe: `Kẻ địch xung quanh Mortemis mất 10%/20%/30% giáp và kháng phép (diện tích: 200). Bao gồm cả <b>Paragon</b>`,
        },
        {
          name: "UNDEAD SERVITUDE",
          imgFirst: "46H596c",
          subName: `(Nô lệ bất tử) ( thụ động ) (2/2/2 điểm anh hùng)`,
          describe: `Khi kẻ địch chết gần Mortemis, nó sẽ hồi sinh thành zombie. Tối đa 4/5/6 zombie cùng lúc.
          Sức khỏe của Zombie suy giảm theo thời gian; -1/-3/-5 HP mỗi giây.`,
          table: `Level	HP	Damage (1.0s)	Giáp
          1	50	1-3	None
          2	110	3-6	None
          3	160	4-8	None`,
          tableImg: "49byA1S",
        },
        {
          name: "ROTTEN BODYGUARD",
          heroSpell: true,
          imgFirst: "46I2mtr",
          subName: `(Vệ sĩ thối) ( kích hoạt, thời gian hồi chiêu: 60 giây ) (4/4/4 điểm anh hùng)`,
          describe: `Triệu hồi một con Zombie Behemoth để chiến đấu với kẻ thù trong 15 giây, gây sát thương chuẩn trên diện rộng (diện tích: 80) và làm choáng kẻ thù trong 1,2 giây cho mỗi đòn tấn công.`,
          table: `Level	HP	Damage (1.4s)	Giáp
          None	500	5-13	None
          1	600	8-25	None
          2	650	16-50	None
          3	700	25-75	None`,
          tableImg: "46Kdlmk",
        },
        {
          name: "ARMY OF DARKNESS",
          imgFirst: "490Iwv4",
          subName: `(Đội quân bóng tối)`,
          describe: `Khi Mortemis chết, 2/3/4 zombie (cấp độ Zombie: 1/2/3) sinh ra xung quanh xác của anh ta.
          Cải thiện ở cấp độ 7 và 8. <br/> Mỗi đòn tấn công tầm xa sẽ hồi phục cho Mortemis bằng 50% sát thương gây ra.`,
        },
      ],
      stats: `Level	HP	Hồi máu (mỗi 2s)	Damage (1.0s)	Sát thương tầm xa* (1.8s)	Giáp\tHồi sinh
      1	75	7	3-5	5-30	None	15s
      2	100	10	3-6	7-38	None	15s
      3	125	12	4-8	8-45	None	15s
      4	150	15	5-9	10-55	None	15s
      5	175	17	6-11	11-65	None	15s
      6	200	20	7-12	13-70	None	15s
      7	225	22	8-14	14-80	None	15s
      8	250	25	8-16	16-90	None	15s
      9	275	27	9-17	17-100	None	15s
      10	300	30	10-19	19-105	None	15s`,
    },
    "JackO' Lantern": {
      name: "JackO' Lantern",
      imgSmall: "3QvxdDQ",
      imgBig: "3QusAdo",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "EXPLOSIVE HEAD",
          imgFirst: "3QvZf21",
          subName: `(Đầu nổ) ( kích hoạt, thời gian hồi chiêu: 4/4/4 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Jack ném đầu, gây sát thương diện rộng, bỏ qua 50% giáp của kẻ địch, gây sát thương diện tích 30/60/100. (Bị ảnh hưởng bởi nâng cấp Quân đội một người)`,
        },
        {
          name: "HAUNTED BLADE",
          imgFirst: "3QeRoEX",
          subName: `(Lưỡi dao thợ săn)( kích hoạt, thời gian hồi chiêu: 16/8/4 giây ) (1/1/1 điểm anh hùng)`,
          describe: `Jack tấn công kẻ địch có kháng phép bằng một đòn đánh đặc biệt, loại bỏ toàn bộ kháng phép của chúng, gây 50-90 sát thương phép.`,
        },
        {
          name: "SPIRIT OF VENGEANCE",
          imgFirst: "409JwZQ",
          subName: `(Tinh thần báo thù)( bị động ) (2/1/1 điểm anh hùng)`,
          describe: `Mỗi lần Jack nhận sát thương, anh ta sẽ tích lũy 20/40/60% cho đến khi giải phóng nó trong đòn tấn công tiếp theo.`,
        },
        {
          name: "THRILLER",
          imgFirst: "3SkbsIN",
          subName: `( bị động ) (3/2/2 điểm anh hùng)`,
          describe: `Cứ sau 30 giây, Jack triệu hồi 2/3/4 Ghoul để hỗ trợ chiến đấu.`,
          table: `Level	HP	Damage	Giáp
          	1	320	 15-25	20%`,
          tableImg: "3QvSk8b",
        },
        {
          name: "NIGHTMARE",
          heroSpell: true,
          imgFirst: "45MoaTD",
          subName: `(Ác mộng) ( kích hoạt, thời gian hồi chiêu: 50 giây ) (6/5/5 điểm anh hùng)`,
          describe: `Tạo ra một đàn ngựa lửa hỗn loạn, khiến kẻ địch hoảng sợ trong thời gian dài và lên tới 160/320/480 sát thương chuẩn.`,
        },
        {
          name: "GHOST RIDER",
          imgFirst: "3Q9FbRL",
          subName: `(Kỵ Sĩ Ma)`,
          describe: `Jack có thể dịch chuyển tức thời khi di chuyển quãng đường dài.`,
        },
      ],
      stats: `Level	HP	Hồi máu	Damage	Giáp\tHồi sinh
      1	175	24	12-20	5%	20s
      2	192	26	15-27	9%	20s
      3	210	28	19-33	13%	20s
      4	228	30	22-40	17%	20s
      5	245	32	26-46	21%	20s
      6	262	34	30-52	25%	20s
      7	280	36	33-59	29%	20s
      8	298	38	37-65	33%	20s
      9	315	40	40-72	37%	20s
      10	333	42	44-79	41%	20s`,
    },
    Tramin: {
      name: "Tramin",
      imgSmall: "3FtDqdo",
      imgBig: "45MBQha",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "BOOMBOTS",
          imgFirst: "46FcUJU",
          imgLast: "3MihJk6",
          subName: `( kích hoạt, thời gian hồi chiêu: 30/20/15 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Đặt tối đa 2/3/4 Boombot trên đường. Mỗi lần kéo dài 60 giây. Khi phát hiện kẻ địch, chúng lao về phía kẻ địch, gây sát thương 28-52/42-78/56-104.`,
        },
        {
          name: "NITRO RUSH",
          imgFirst: "46PzwaH",
          imgLast: "3FypyyE",
          subName: `( kích hoạt, thời gian hồi chiêu: 40 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Tramin uống một ngụm Nitroglycerin, nâng tốc độ tấn công lên 0,75 giây trong 7/14/22 giây.`,
        },
        {
          name: "FLASHBANG",
          imgFirst: "3FuTk7e",
          imgLast: "3s6A8cV",
          subName: `( kích hoạt, thời gian hồi chiêu: 25 giây ) (1/2/3 điểm anh hùng)`,
          describe: `Tramin ném Flashbang vào một nhóm kẻ thù, làm choáng chúng trong 1/2/3 giây.`,
        },
        {
          name: "ROCKET BARRAGE",
          imgFirst: "3FuTlIk",
          imgLast: "3FvMoqn",
          subName: `( kích hoạt, thời gian hồi chiêu: 18 giây ) (2/3/4 điểm anh hùng)`,
          describe: `Bắn một loạt 2/4/6 tên lửa vào kẻ địch, gây sát thương 25-46/32-59/39-72 cho mỗi tên lửa.`,
        },
        {
          name: "BOMBAGGEDON",
          heroSpell: true,
          imgFirst: "408jPc9",
          subName: `( kích hoạt, thời gian hồi chiêu: 70 giây ) (3/3/3 điểm anh hùng)`,
          describe: `Ném một chiếc hộp xuống đường, 3/5/7/9 quả bom sẽ đi qua nó, gây 80/120/170/200 sát thương cho mỗi kẻ địch khi va chạm.`,
        },
        {
          name: "ROCKET JUMP",
          imgFirst: "409BEYq",
          subName: `(Tên lửa nhảy)`,
          describe: `Tên lửa Tramin nhảy khi di chuyển quãng đường dài.`,
        },
      ],
      stats: `Level	HP	Hồi máu (mỗi 2s)	Damage (1.0s)	Sát thương tầm xa (2.0s)	Giáp\tHồi sinh
      1	150	15	4-8	7-17	Low (1%)	18s
      2	170	17	4-10	9-20	Low (4%)	18s
      3	190	19	5-11	10-23	Low (6%)	18s
      4	210	21	5-13	11-25	Low (9%)	18s
      5	230	23	6-14	12-28	Low (11%)	18s
      6	250	25	7-15	13-31	Low (14%)	18s
      7	270	27	7-17	15-34	Low (16%)	18s
      8	290	29	8-18	16-37	Low (19%)	18s
      9	310	31	8-20	17-39	Low (21%)	18s
      10	330	33	9-21	18-42	Low (24%)	18s`,
    },
    Jigou: {
      name: "Jigou",
      imgSmall: "45GiTwQ",
      imgBig: "40ccOaj",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "ICE BALL",
          imgFirst: "40boxG4",
          imgLast: "45KhK7p",
          subName: `(Bóng băng) ( kích hoạt, thời gian hồi chiêu: 10 giây ) (2/3/4 điểm anh hùng)`,
          describe: `Jigou ném một tảng đá đóng băng, gây 35-65/88-163/158-193 sát thương cho kẻ địch. Diện tích sát thương: 60`,
        },
        {
          name: "FROZEN BREATH",
          imgFirst: "3tW4HCs",
          imgLast: "45JFLM0",
          subName: `(Hơi thở đông lạnh) ( kích hoạt, thời gian hồi chiêu: 20 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Jigou thở ra và đóng băng tất cả kẻ địch bị ảnh hưởng trong 3 giây.`,
        },
        {
          name: "EARTH SLAM",
          imgFirst: "45Gxfxj",
          imgLast: "3Qau3nQ",
          subName: `(Cú đập đất)( kích hoạt, thời gian hồi chiêu: 30 giây ) (3/3/3 điểm anh hùng)`,
          describe: `Jigou bắt đầu nhảy điên cuồng, làm rung chuyển mặt đất, làm choáng và gây sát thương 70/130/220 cho kẻ địch trong 2/3/5 giây. Diện tích sát thương: 180`,
        },
        {
          name: "GLACIAL FORM",
          imgFirst: "3QeFXx2",
          imgLast: "3tNhLtY",
          subName: `(Hình thức tuyệt vời) ( kích hoạt, thời gian hồi chiêu: 40 giây ) (1/1/1 điểm anh hùng)`,
          describe: `Khi máu của Jigou dưới 30%, anh ta bao quanh mình trong một hàng rào băng không thể xuyên thủng trong 3/6/9 giây.`,
        },
        {
          name: "ICE ZONE",
          heroSpell: true,
          imgFirst: "49bfMje",
          subName: `(Băng giá) ( kích hoạt, thời gian hồi chiêu: 55 giây ) (1/3/5 điểm anh hùng)`,
          describe: `Tạo ra một vùng phủ đầy băng, làm chậm và gây sát thương lên tất cả kẻ địch (bằng 15%/30%/40%/60% tốc độ của chúng trong 5 giây và gây 15/30/150/260 sát thương) bên trong vùng đó.`,
        },
        {
          name: "YETI BLOOD",
          imgFirst: "49bz348",
          subName: `(Máu Yeti)`,
          describe: `Liên tục hồi phục 3/5/6 HP mỗi 0,2 giây ở Cấp Anh hùng 1/5/10.`,
        },
      ],
      stats: `Level	HP	Hồi máu (mỗi 2s)	Damage (2.0s)	Giáp\tHồi sinh
      1	300	30	16-24	Low (7%)	20s
      2	350	35	21-31	Low (8%)	20s
      3	400	40	26-38	Low (10%)	20s
      4	450	45	30-46	Low (12%)	20s
      5	500	50	35-53	Low (14%)	20s
      6	550	55	40-60	Low (16%)	20s
      7	600	60	45-67	Low (18%)	20s
      8	650	65	50-74	Low (20%)	20s
      9	700	70	54-82	Low (22%)	20s
      10	750	75	59-89	Low (24%)	20s`,
    },
    "Jun Pai": {
      name: "Jun Pai",
      imgSmall: "3tPMEOv",
      imgBig: "3Fxo47y",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "TIDAL WAVE",
          imgFirst: "3FuTsUg",
          subName: `(Sóng thuỷ triều) ( kích hoạt, thời gian hồi chiêu: 18 giây ) (1/1/1 điểm anh hùng)`,
          describe: `Tạo ra một làn sóng mạnh tiến tới trên đường đi, làm choáng trong 2 giây và gây sát thương vật lý 40/80/120 cho kẻ địch bị ảnh hưởng.`,
        },
        {
          name: "BANNER OF COURAGE",
          imgFirst: "46HRZ99",
          subName: `(Căn cứ của bạn thuộc về tôi) (kích hoạt, thời gian hồi chiêu: 12 giây) (1/1/1 điểm anh hùng)`,
          describe: `Đặt một biểu ngữ xung quanh một nhóm đồng minh (tối thiểu 2, tối đa 8) trong 4/6/8 giây, mang lại khả năng hồi phục 3/5/7 HP mỗi 0,2 giây khi ở gần nó (diện tích: 120). Không ảnh hưởng đến bản thân Jun'Pai.`,
        },
        {
          name: "GAZE OF THE NAGA",
          imgFirst: "3SfffqD",
          subName: `(Cái nhìn của Naga) (kích hoạt, thời gian hồi chiêu: 10 giây) (3/3/3 điểm anh hùng)`,
          describe: `Làm im lặng vĩnh viễn một nhóm kẻ thù (tối thiểu 3, tối đa 6) và làm chậm chúng đi 50% trong 3/5/7 giây.`,
        },
        {
          name: "SPLASH",
          imgFirst: "46IVLzb",
          subName: `(Giật gân) ( kích hoạt, thời gian hồi chiêu: 9 giây ) (4/3/2 điểm anh hùng)`,
          describe: `Nhanh chóng chạm đất, tạo ra sóng xung kích gây 30/60/90 sát thương vật lý cho tất cả kẻ địch trong vùng ảnh hưởng (diện tích: 150).`,
        },
        {
          name: "TERROR FROM THE DEEP",
          heroSpell: true,
          imgFirst: "3FypK0Q",
          subName: `(Khủng bố từ vực sâu) ( kích hoạt, thời gian hồi chiêu: 40 giây ) (4/4/4 điểm anh hùng)`,
          describe: `Triệu hồi Kraken trong 8 giây, gây 6/10/20/30 sát thương vật lý mỗi 0,5 giây cho tất cả kẻ địch bị ảnh hưởng trong khu vực.`,
        },
        {
          name: "LAST STAND",
          imgFirst: "3FxHl92",
          subName: `(Trùm cuối)`,
          describe: `Cải thiện 50% sát thương tấn công khi máu của anh ta dưới 80%.`,
        },
      ],
      stats: `Level	HP	Hồi máu
      (2.0s)
      
      Damage (1.0s)	Sát thương tầm xa (1.1s)	Giáp\tHồi sinh
      1	220	22	8-12	8-12	Low (3%)	20s
      2	245	24	10-16	10-16	Low (6%)	20s
      3	270	27	13-19	13-19	Low (9%)	20s
      4	295	29	15-23	15-23	Low (12%)	20s
      5	320	32	18-26	18-26	Low (15%)	20s
      6	345	34	20-30	20-30	Low (18%)	20s
      7	370	37	22-34	22-34	Low (21%)	20s
      8	395	39	25-37	25-37	Low (24%)	20s
      9	420	42	27-41	27-41	Low (27%)	20s
      10	445	44	30-44	30-44	Low (30%)	20s`,
    },
    Grosh: {
      name: "Grosh",
      imgSmall: "3Sigwgz",
      imgBig: "3S7O6WC",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "FISSURE",
          imgFirst: "40e3jaM",
          subName: `(Khai thác) ( kích hoạt, thời gian hồi chiêu: 25 giây ) (3/3/3 điểm anh hùng)`,
          describe: `Grosh gây 160/240/320 sát thương vật lý cho kẻ địch và làm choáng kẻ địch trong 1/1,5/2 giây, khiến tất cả kẻ địch xung quanh sợ hãi trong 1,5 giây. (Phạm vi sợ hãi: 120 -- Kẻ địch sợ hãi bỏ chạy nhanh hơn 10%)`,
        },
        {
          name: "FRENZY",
          imgFirst: "3MfTL9c",
          subName: `(Điên rồ) ( bị động, thời gian hồi chiêu: 40 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Nếu Grosh dưới 20% HP, anh ta sẽ rơi vào trạng thái điên cuồng bất tử trong 6/7/8 giây và đặt tốc độ tấn công của mình thành 1,05/0,9/0,75 trong 4/6/8 giây.`,
        },
        {
          name: "WHIRLWIND",
          imgFirst: "3Mc2byA",
          subName: `(Cơn lốc) ( kích hoạt, hồi chiêu: sau mỗi 5/4/3 đòn tấn công -- tối thiểu 1 giây) (2/2/2 điểm anh hùng)`,
          describe: `Sau khi Grosh tung ra 5/4/3 đòn tấn công, đòn tiếp theo tấn công tất cả kẻ địch ở gần và gây thêm 35/55/75 sát thương vật lý. (Phạm vi tấn công: 130)`,
        },
        {
          name: "LEGACY",
          imgFirst: "472PTR4",
          subName: `(Di sản) ( bị động ) (2/2/2 điểm anh hùng)`,
          describe: `Khi Grosh chết, những mảnh xương chết chóc vỡ ra xung quanh anh ta, gây 30/40/50 sát thương vật lý mỗi giây và làm chậm kẻ địch đi 30/35/40% trong 8/12/16 giây. (Diện tích: 120 -- Gây 15/20/25 sát thương vật lý mỗi 0,5 giây)`,
        },
        {
          name: "ORIGINAL TERROR",
          heroSpell: true,
          imgFirst: "3QxN1Gv",
          subName: `(Khủng hoảng gốc) ( kích hoạt, thời gian hồi chiêu: 50 giây ) (4/4/4 điểm anh hùng)`,
          describe: `Một làn sóng xương chạy dọc con đường, gây 20/40/60/80 sát thương vật lý cho tất cả kẻ địch trên mặt đất cản đường và làm choáng chúng trong 3 giây. (Vùng sát thương: 110 -- Kẻ địch có thể bị tấn công nhiều lần)`,
        },
        {
          name: "LONE WARRIOR",
          imgFirst: "472g7mC",
          subName: `(Chiến binh cô đơn)`,
          describe: `Grosh nhận thêm 30% sát thương và máu khi không có đơn vị đồng minh nào ở gần. (Phạm vi kiểm tra: 180)`,
        },
      ],
      stats: `Level\tHP(+30%)\tHồi máu (mỗi 2s)\tDamage (1.5s) (+30%)\tGiáp\tHồi sinh
      1	260 (338)\t30	14-22 (18-28)\tLow (6%)\t20s
      2	300 (390)\t35	17-25 (22-32)\tLow (8%)\t20s
      3	340 (442)\t40	19-29 (24-37)\tLow (10%)\t20s
      4	380 (494)\t45	22-32 (28-41)\tLow (12%)\t20s
      5	420 (546)\t50	24-36 (31-46)\tLow (14%)\t20s
      6	460 (598)\t55	26-40 (33-52)\tLow (16%)\t20s
      7	500 (650)\t60	29-43 (37-55)\tLow (18%)\t20s
      8	540 (702)\t65	31-47 (40-61)\tLow (20%)\t20s
      9	580 (754)\t70	34-50 (44-65)\tLow (22%)\t20s
      10	620 (806)\t75	36-54 (46-70)\tLow (24%)\t20s`,
    },
    "Doom Tank SG-11": {
      name: "Doom Tank SG-11",
      imgSmall: "45OB2sa",
      imgBig: "46IXrbW",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "HEAT MISSILES",
          imgFirst: "3Qx7Txm",
          subName: `(Tên lửa nhiệt) ( kích hoạt, thời gian hồi chiêu: 20 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Phóng ra một loạt tên lửa dẫn đường 4/6/8 tìm kiếm và tác động lên kẻ địch trên khắp chiến trường, gây 16-24/22-34/32-48 sát thương vật lý cho mỗi tên lửa.`,
        },
        {
          name: "GROUND SLAM",
          imgFirst: "3FwRVwX",
          subName: `(Cú đập đất) ( kích hoạt, thời gian hồi chiêu: 30 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Đập xuống đất, làm choáng kẻ địch trên diện rộng trong 2 giây và gây sát thương 30/60/90.`,
        },
        {
          name: "THE EXPENDABLES",
          imgFirst: "3s8XK0E",
          subName: `(Có thể tiêu dùng) ( thụ động, thời gian hồi chiêu: 15 giây ) (1/2/3 điểm anh hùng)`,
          describe: `Sinh ra 2/3/3 lính sẵn sàng chiến đấu và bảo vệ xe tăng khỏi mọi mối đe dọa xung quanh.`,
          table: `Level	HP	Sát thương cận chiến	Sát thương tầm xa (1,0 giây)	Giáp
          1	160	4-7	Không có	Không có
          2	160	6-10	Không có	Không có
          3	200	7-13	7-13	Không có`,
        },
        {
          name: "SCORCHING CANNON",
          imgFirst: "3FyVq5W",
          subName: `(Pháo thiêu đốt) ( kích hoạt, thời gian hồi chiêu: 35/33/30 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Đốt cháy Súng phun lửa và xoay tròn, khiến kẻ địch nhận tới 40/80/120 sát thương vật lý (2/4/6 sát thương mỗi 0,2 giây).`,
        },
        {
          name: "CALL OF THE VALKYRIE",
          heroSpell: true,
          imgFirst: "3S9gAzf",
          subName: `(Cuộc gọi của Valkyrie) ( kích hoạt, thời gian hồi chiêu: 60 giây ) (3/4/5 điểm anh hùng)`,
          describe: `Gọi máy bay ném bom napalm xuống đường, đốt cháy kẻ địch với sát thương lên tới 350/525/1225/2100 (2/3/7/12 sát thương mỗi 0,03 giây, áp dụng lại sau mỗi 0,2 giây).`,
        },
        {
          name: "SPIKY SLUGS",
          imgFirst: "3Q3V4t2",
          subName: `(Sên nhọn)`,
          describe: `Kẻ địch nhận 1 sát thương vật lý mỗi 0,2 giây khi xe tăng di chuyển qua chúng.`,
        },
      ],
      stats: `Level	HP	Hồi máu (mỗi 2s)	Damage (3.0s)	Giáp\tHồi sinh
      1	220	22	13-23	Low (6%)	25s
      2	240	24	21-39	Low (12%)	25s
      3	260	26	29-55	Low (18%)	25s
      4	280	28	38-70	Low (24%)	25s
      5	300	30	46-86	Low (30%)	25s
      6	320	32	55-101	Medium (36%)	25s
      7	340	34	63-117	Medium (42%)	25s
      8	360	36	71-133	Medium (48%)	25s
      9	380	38	80-148	Medium (54%)	25s
      10	400	40	88-164	Medium (60%)	25s`,
    },
    Eiskalt: {
      name: "Eiskalt",
      imgSmall: "3MgsuDQ",
      imgBig: "3MfK1fl",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "FROST BLAST",
          imgFirst: "3SeKKRv",
          subName: `(Vụ nổ băng giá) ( bị động ) (3/2/1 điểm anh hùng)`,
          describe: `Các đòn đánh cơ bản của Eiskalt giờ gây sát thương trong phạm vi 80/120/160.`,
        },
        {
          name: "PERMAFROST",
          imgFirst: "3Qaog1u",
          subName: `(Băng vĩnh cửu) ( kích hoạt, thời gian hồi chiêu: 20/16/12 giây ) (3/2/1 điểm anh hùng)`,
          describe: `Eiskalt đóng băng mặt đất, làm chậm tốc độ di chuyển của kẻ địch đi 50% trong 5 giây.`,
        },
        {
          name: "AVALANCHE",
          imgFirst: "476G7gy",
          subName: `(text)( kích hoạt, thời gian hồi chiêu: 18 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Ném một quả cầu tuyết bay dọc theo đường đi trong 5 giây, gây 8/16/24 sát thương vật lý mỗi 0,25 giây. Yêu cầu 2 mục tiêu để kích hoạt.`,
        },
        {
          name: "ICE PEAKS",
          imgFirst: "475WDh6",
          subName: `(Đỉnh băng) ( kích hoạt, thời gian hồi chiêu: 15 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Eiskalt triệu hồi các gai băng gây sát thương bằng 10%/20%/30% HP tối đa của kẻ địch. Không bao gồm trùm.`,
        },
        {
          name: "GLACIAL STORM",
          heroSpell: true,
          imgFirst: "3Qy2Rkq",
          subName: `(Bão băng giá) ( kích hoạt, thời gian hồi chiêu: 50*giây ) (4/4/4 điểm anh hùng)`,
          describe: `Đóng băng tất cả kẻ thù** trên bản đồ trong 3/4/8/12 giây.<br/>
          * Thời gian hồi chiêu 40 giây khi nâng cấp Sức mạnh tối thượng, tăng 30% thời gian hoạt động.<br/>
          ** Không bao gồm trùm, <b>Frozen Soul</b> và <b>Ghost</b>.`,
        },
        {
          name: "ICY BREATH",
          imgFirst: "472goGa",
          subName: `(Hơi thở băng giá)`,
          describe: `Kẻ địch trúng đòn tấn công cơ bản của Eiskalt bị giảm tốc độ di chuyển đi 30% trong 4 giây.<br/>
          Eiskalt là một anh hùng bay nên anh ta không bị hạn chế ở lại trên đường và không thể chặn kẻ thù. (Kẻ thù tầm xa sẽ cố gắng tấn công anh ta nếu anh ta ở trong tầm bắn và do đó bị chặn một cách hiệu quả.)<br/>
          Đòn đánh cơ bản của Eiskalt gây sát thương chuẩn.
          `,
        },
      ],
      stats: `Level	HP	Hồi máu (2.0s)	Damage (2.0s)	Giáp\tHồi sinh
      1	300	22	14-22	None	25s
      2	325	25	19-29	None	25s
      3	350	28	24-36	None	25s
      4	375	31	29-43	None	25s
      5	400	34	34-50	None	25s
      6	425	37	38-58	None	25s
      7	450	40	43-65	None	25s
      8	475	43	48-72	None	25s
      9	500	46	53-79	None	25s
      10	525 (630)	49	58-86 (66-98)	None	25s`,
    },
    Murglun: {
      name: "Murglun",
      imgSmall: "4747JD5",
      imgBig: "496qrvH",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "LAVA POOL",
          imgFirst: "479esff",
          subName: `(Hồ dung nham) ( bị động ) (2/2/2 điểm anh hùng)`,
          describe: `Các đòn tấn công của Murglun để lại than hồng nóng trên mặt đất (diện tích: 50), gây 10/20/30 sát thương chuẩn mỗi giây cho kẻ địch đi qua nó.`,
        },
        {
          name: "TAR MAKER",
          imgFirst: "46LmriL",
          subName: `( bị động ) (1/1/1 điểm anh hùng)`,
          describe: `Tất cả các tòa tháp gần Murglun gây thêm 5%/10%/20% sát thương. Phạm vi: 300`,
        },
        {
          name: "ERUPTION",
          imgFirst: "495S2gD",
          subName: `(Phun trào) ( kích hoạt, thời gian hồi chiêu: 70/60/50 giây ) (2/1/1 điểm anh hùng)`,
          describe: `Murglun gọi dung nham từ dưới lòng đất, phun trào bên dưới kẻ thù, ngay lập tức giết chết chúng.`,
        },
        {
          name: "INFERNAL HEAT",
          imgFirst: "46KqwUi",
          subName: `(Nhiệt địa ngục) ( kích hoạt, thời gian hồi chiêu: 22/18/14 giây ) (3/2/2 điểm anh hùng)`,
          describe: `Đập đôi cánh lửa của cô ấy, tạo ra một vòng xoáy lửa trên mặt đất (diện tích: 100) trong 4 giây và gây 5 sát thương chuẩn mỗi 0,2 giây. Yêu cầu 2 mục tiêu để kích hoạt.`,
        },
        {
          name: "VOLCANIC BARRAGE",
          heroSpell: true,
          imgFirst: "46LNYAo",
          subName: `(Núi lửa phun trào) ( kích hoạt, thời gian hồi chiêu: 120/110/100/90 giây ) (6/5/5 điểm anh hùng)`,
          describe: `Mưa thiên thạch từ trên trời rơi xuống, tiêu diệt tất cả kẻ thù trong phạm vi 100 mỗi sao băng ngay lập tức. Mỗi tảng đá gây 400 (460*) sát thương chuẩn trên phạm vi 50 lên trùm.`,
        },
        {
          name: "MAGMA BLOOD",
          imgFirst: "40e3lPW",
          subName: `(Máu dung nham)`,
          describe: `Murglun định kỳ thả magma gây 20 (23*) sát thương chuẩn (diện tích: 75). Khả năng này sẽ kích hoạt cứ sau 0,3-0,6 giây một lần, với tốc độ không đổi trong toàn bộ cấp độ (khởi động lại một cấp độ sẽ làm mới tốc độ rơi, cho phép dps cao hơn).
          Murglun có khả năng bay và không bị buộc phải ở trên đường.
          Đòn đánh cơ bản của Murglun gây sát thương vật lý.
          `,
        },
      ],
      stats: `Level	HP	Hồi máu (2.0s)	Damage (2.0s)	Giáp\tHồi sinh
      1	320 (384)	22	14-26 (16-30)	4%	25s
      2	345 (414)	25	18-34 (21-39)	6%	25s
      3	370 (444)	28	22-42 (25-46)	8%	25s
      4	395 (474)	31	27-49 (31-56)	10%	25s
      5	420 (504)	34	31-57 (36-66)	12%	25s
      6	445 (534)	37	35-65 (40-75)	14%	25s
      7	470 (564)	40	39-73 (45-84)	16%	25s
      8	495 (594)	43	43-81 (49-93)	18%	25s
      9	520 (624)	46	48-88 (55-101)	20%	25s
      10	545 (654)	49	52-96 (59-110)	22%	25s`,
    },

    Dianyun: {
      name: "Dianyun",
      imgSmall: "3scO3Ov",
      imgBig: "3QvZMkx",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "Lightning Strike",
          imgFirst: "3Sf7r8i",
          subName: `(Sét đánh) ( kích hoạt, thời gian hồi chiêu: 18 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Các đám mây tích tụ điện và phóng ra một tia sét tấn công tối đa 3/5/6 kẻ địch, gây 50 sát thương phép cho mỗi kẻ địch (58 với Đội quân một người). Phạm vi kích hoạt bằng với phạm vi tấn công của anh ta: tối thiểu 100, tối đa 400.`,
        },
        {
          name: "Lord of the Storm",
          imgFirst: "3Q3N23a",
          subName: `(Chúa tể bão tố) ( bị động ) (1/1/1 điểm anh hùng)`,
          describe: `Tăng số lượng đám mây mà Diayun có thể tấn công cùng lúc lên 2/3/4.`,
        },
        {
          name: "Divine Rain",
          imgFirst: "4742V0r",
          subName: `(Cơn mưa thần thánh) ( kích hoạt, thời gian hồi chiêu: 15 giây ) (2/1/1 điểm anh hùng)`,
          describe: `Một đám mây giông được triệu tập phía trên một nhóm đồng minh, phục hồi 4/8/12 HP mỗi 0,5 giây trong tổng cộng 5 giây. AOE chưa xác định Phạm vi kích hoạt tối thiểu là 90, tối đa là 220.`,
        },
        {
          name: "Supreme Wave",
          imgFirst: "3rXV1ah",
          subName: `(Làn sóng tối cao) ( kích hoạt: 21 giây ) (3/2/2 điểm anh hùng)`,
          describe: `Giải phóng một làn sóng theo mọi hướng của (các) con đường mà Diayun đang bay qua, gây 0 sát thương và làm choáng chúng trong 2/3/4 giây. Cần ít nhất 3 mục tiêu trong phạm vi để kích hoạt. Phạm vi kích hoạt: 45-200.`,
        },
        {
          name: "Son of the Storm",
          heroSpell: true,
          imgFirst: "3SephrR",
          subName: `(Đứa con của Bão tố) ( kích hoạt: 40 giây (33 với Sức mạnh Tối thượng) ) (6/5/5 điểm anh hùng)`,
          describe: `Triệu hồi một con rồng đứng yên mà kẻ thù không thể gây sát thương, gây 120-180 sát thương phép mỗi lần bắn. Hết hạn sau 3/5/10/15 lần bắn. Tối đa 10 có thể hoạt động cùng một lúc; vượt quá giới hạn này khiến con rồng già nhất hết hạn. Chúng cũng hết hạn sau một khoảng thời gian nhất định mà không sử dụng hết số lần bắn của mình. Mỗi con rồng có phạm vi tấn công từ 40-320.`,
        },
        {
          name: "Kong Ming Lantern",
          imgFirst: "46HfKyf",
          subName: `(Đèn lồng Khổng Minh)`,
          describe: `Khi kẻ địch chết gần đám mây sấm sét*, một chiếc đèn lồng Khổng Minh bay trên bầu trời, tạo thêm 1 vàng.<br/>
          *Điều này mang lại phạm vi kỹ năng tương đương với phạm vi của Diayun, là 100-400.<br/>
          Các cuộc tấn công của rồng Diayun sẽ làm cho kẻ thù bị choáng một thời gian ngắn.`,
        },
      ],
      stats: `Level	Điểm HP	Hồi máu	Damage (2.0s)	Giáp	Hồi sinh
      1	13.615	0	99-100	None (0%)	22s
      2	14.350	0	105-110	None (0%)	22s
      3	15.085	0	119-120	None (0%)	22s
      4	15.820	0	120-126	None (0%)	22s
      5	16.555	0	127.5-132	None (0%)	22s
      6	17.290	0	135-136	None (0%)	22s
      7	18.025	0	132-139.5	None (0%)	22s
      8	18.760	0	135-140	None (0%)	22s
      9	19.495	0	143-156	None (0%)	22s
      10	20.230	0	188-193.5	None (0%)	22s`,
    },

    Beresad: {
      name: "Beresad",
      imgSmall: "Beresad",
      imgBig: "40ddagS",
      link: "link",
      linkTitle: "text",
      skills: [
        {
          name: "CONFLAGRATION",
          imgFirst: "45Gjyyk",
          subName: `(Hoả hoạn) ( kích hoạt, thời gian hồi chiêu: 28/26/24 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Beresad thổi ra một ngọn lửa cực mạnh thiêu đốt mặt đất, gây sát thương chuẩn lên tới 50/80/120 cho tất cả kẻ địch đứng trong ngọn lửa.`,
        },
        {
          name: "FEAR THE DRAGON",
          imgFirst: "3tNnvUG",
          subName: `(Sợ Rồng) ( kích hoạt, thời gian hồi chiêu: 22 giây ) (1/1/1 điểm anh hùng)`,
          describe: `Beresad gầm gừ đầy sức mạnh. Tất cả kẻ địch bị ảnh hưởng đều bỏ chạy để lấy mạng, quay trở lại con đường đó trong 3/5/7 giây. Beresad sẽ không sử dụng phép thuật này nếu bị đặt ngoài đường đi.`,
        },
        {
          name: "DRAGON SPAWN",
          imgFirst: "49mkriL",
          subName: `(Golem Rồng) ( kích hoạt, thời gian hồi chiêu: 45 giây ) (2/2/2 điểm anh hùng)`,
          describe: `Ném một tảng đá xuống đường và truyền ma thuật vào nó để tạo thành một con golem sẽ chiến đấu với kẻ thù trong 20 giây.`,
          table: `Level	HP	Sát thương (1,5s)	Giáp	Hồi máu
          1	300	18-27	Không có	0
          2	400	30-45	Không có	0
          3	500	42-63	Không có	0`,
          tableImg: "49aOHwy",
        },
        {
          name: "OBLITERATE",
          imgFirst: "40cVTnR",
          subName: `(Tuyệt vời) ( kích hoạt, thời gian hồi chiêu: 70/60/50 giây ) (4/1/1 điểm anh hùng)`,
          describe: `Bắn một quả cầu lửa tập trung vào kẻ địch, giết chết nó ngay lập tức và gây ra vụ nổ gây 8-12/12-18/18-24 sát thương chuẩn cho tất cả kẻ địch ở gần nó.`,
        },
        {
          name: "HELLFIRE",
          heroSpell: true,
          imgFirst: "3tPN9rR",
          subName: `(Mưa lửa) ( kích hoạt, thời gian hồi chiêu: 70 giây ) (5/5/5 điểm anh hùng)`,
          describe: `Beresad triệu hồi một cơn mưa lửa, gây 25/60/120/180 sát thương chuẩn (1/3/6/9 sát thương mỗi 0,2 giây) trong 4 giây lên tất cả kẻ địch trên toàn bản đồ.`,
        },
        {
          name: "AVARICE",
          imgFirst: "3FvMSgb",
          subName: `(Tham lam)`,
          describe: `Kẻ địch bị Beresad giết sẽ nhận thêm vàng. (Mô tả gây hiểu lầm trên thiết bị di động.) Cụ thể, mỗi kẻ địch bị giết sẽ nhận được nhiều hơn bình thường hai vàng. Hiệu quả dường như không đáng kể; Sức mạnh thực sự của Beresad nằm ở những kỹ năng khác của anh ta.<br/> 
          Phần thưởng vàng từ Avarice không được kích hoạt khi tiêu diệt được Hellfire.<br/> 
          Beresad có khả năng bay và không bị buộc phải ở trên đường.<br/> Đòn đánh cơ bản của Beresad gây sát thương vật lý.`,
        },
      ],
      stats: `Level	HP	Hồi máu (mỗi 2s)	Damage (1.5s)	Giáp\tHồi sinh
      1	375	22	13-23	None	25s
      2	400	25	16-29	None	25s
      3	425	28	19-35	None	25s
      4	450	31	22-41	None	25s
      5	475	34	25-47	None	25s
      6	500	37	28-53	None	25s
      7	525	40	32-59	None	25s
      8	550	43	35-64	None	25s
      9	575	46	38-70	None	25s
      10	600	49	41-76	None	25s`,
    },

    // Special Skills
    specialSkills: [
      {
        name: "Reinforcements",
        imgSmall: "3s7qzdK",
        link: "https://kingdomrushtiengviet.blogspot.com/2023/09/ky-nang-call-reinforcements-trong.html",
        linkTitle: "Kỹ năng đặc biệt Call Reinforcements",
      },
      {
        name: "Rain of Fire",
        imgSmall: "496kPSa",
        link: "https://kingdomrushtiengviet.blogspot.com/2023/09/ky-nang-rain-of-fire-trong-kingdom-rush.html",
        linkTitle: "Kỹ năng đặc biệt Rain Of Fire",
      },
      {
        name: "Soul Impact",
        imgSmall: "3Qa9ojJ",
        link: "link",
        linkTitle: "text",
      },
      {
        name: "Thunderbolt",
        imgSmall: "409CpAK",
        link: "link",
        linkTitle: "text",
      },
    ],
    // Levels
    levelsFrontiers: [
      {
        name: "Beresad's Lair",
        imgSmall: "45N0uOM",
      },
      {
        name: "Bonesburg",
        imgSmall: "Bonesburg",
      },
      {
        name: "Buccaneer's Den",
        imgSmall: "3tTmf25",
      },
      {
        name: "Crimson Valley",
        imgSmall: "3FxIk9e",
      },
      {
        name: "Darklight Depths",
        imgSmall: "3FwSU07",
      },
      {
        name: "Desecrated Grove",
        imgSmall: "3MfrfEK",
      },
      {
        name: "Dunes Of Despair",
        imgSmall: "496g6jr",
      },
      {
        name: "Dusk Chateau",
        imgSmall: "3FyqW4a",
      },
      {
        name: "Emberspike Depths",
        imgSmall: "3FvvBnh",
      },
      {
        name: "Hammerhold",
        imgSmall: "3Seq9wD",
      },
      {
        name: "Lost Jungle",
        imgSmall: "3tOicEs",
      },
      {
        name: "Ma'qwa Urqu",
        imgSmall: "492HeQt",
      },
      {
        name: "Nazeru's Gates",
        imgSmall: "3MeRYBn",
      },
      {
        name: "Port Tortuga",
        imgSmall: "45TWAUE",
      },
      {
        name: "Ruins Of Nas'de",
        imgSmall: "RuinsOfNas'de",
      },
      {
        name: "Sandhawk Hamlet",
        imgSmall: "45JGRY8",
      },
      {
        name: "Sape Oasis",
        imgSmall: "45QPGPM",
      },
      {
        name: "Snapvine Bridge",
        imgSmall: "45Iv5Nv",
      },
      {
        name: "Storm Atoll",
        imgSmall: "40cLDMl",
      },
      {
        name: "Temple Of Ethereal Evil",
        imgSmall: "3Mc3my0",
      },
      {
        name: "Temple Of Saqra",
        imgSmall: "46QLvVG",
      },
      {
        name: "The Dark Descent",
        imgSmall: "46IYrgc",
      },
      {
        name: "The Sunken Citadel",
        imgSmall: "3QvulH7",
      },
      {
        name: "The Underpass",
        imgSmall: "3Qw5l2z",
      },
    ],

    levelsOrigins: [
      {
        name: "Waterfalls Trail",
        imgSmall: "46IX29r",
      },
      {
        name: "Valor's Rest",
        imgSmall: "3QxOLQ3",
      },
      {
        name: "Twilight Invasion",
        imgSmall: "3s3GpGl",
      },
      {
        name: "The Unseelie Court",
        imgSmall: "3Qw0xdn",
      },
      {
        name: "The High Cross",
        imgSmall: "3QGykB3",
      },
      {
        name: "The Crystal Lake",
        imgSmall: "3QwstOx",
      },
      {
        name: "The Ascent",
        imgSmall: "3QdfTlH",
      },
      {
        name: "Tainted Pit",
        imgSmall: "3Qaciov",
      },
      {
        name: "Shrine of Elynie",
        imgSmall: "3QvSPQF",
      },
      {
        name: "Royal Gardens",
        imgSmall: "3tOpKap",
      },
      {
        name: "Rockhenge",
        imgSmall: "3Qy3Z7E",
      },
      {
        name: "Redwood Stand",
        imgSmall: "3SeDoO1",
      },
      {
        name: "Neverwonder",
        imgSmall: "3Saqsc5",
      },
      {
        name: "Mactans' Retreat",
        imgSmall: "3ScPLdk",
      },
      {
        name: "Gryphon Point",
        imgSmall: "3S92Ggw",
      },
      {
        name: "Grimmsburg",
        imgSmall: "3Q9HWCQ",
      },
      {
        name: "Gray Ravens",
        imgSmall: "3Qaaegn",
      },
      {
        name: "Galadrian's Wall",
        imgSmall: "49bAfEE",
      },
      {
        name: "Dwaraman Gates",
        imgSmall: "3MgNr1h",
      },
      {
        name: "Duskwood Outpost",
        imgSmall: "3rXVZTX",
      },
      {
        name: "Duredhel Outskirts",
        imgSmall: "472hhhY",
      },
      {
        name: "Blood Quarry",
        imgSmall: "3MfX6oU",
      },
      {
        name: "Beheader's Seat",
        imgSmall: "472qdUD",
      },
      {
        name: "Arcane Quarters",
        imgSmall: "3Mc3tJW",
      },
    ],

    levelsVengeance: [
      {
        name: "Vez'nan's Tower",
        imgSmall: "3Qx96EU",
      },
      {
        name: "The Original World",
        imgSmall: "477Qdht",
      },
      {
        name: "The Frozen Throne",
        imgSmall: "46LPhPO",
      },
      {
        name: "The Ancient Ghosts",
        imgSmall: "46Zw5hX",
      },
      {
        name: "Silveroak Outpost",
        imgSmall: "46ZvXit",
      },
      {
        name: "Pond Of The Sage",
        imgSmall: "3tOiD1y",
      },
      {
        name: "Otil Farmlands",
        imgSmall: "46WVKYc",
      },
      {
        name: "Northerners' Village",
        imgSmall: "3S92RZe",
      },
      {
        name: "Northerners' Outpost",
        imgSmall: "3SejWB9",
      },
      {
        name: "Maginicia Shores",
        imgSmall: "3SeLXbv",
      },
      {
        name: "Lost Passage",
        imgSmall: "46PAVOv",
      },
      {
        name: "Lightseeker Camp",
        imgSmall: "3tKHbsm",
      },
      {
        name: "Kazan Mines",
        imgSmall: "45Lpg1O",
      },
      {
        name: "Jokull's Nest",
        imgSmall: "3QaczYz",
      },
      {
        name: "Into The Mountains",
        imgSmall: "3Q9H5Sp",
      },
      {
        name: "Golden Brewery",
        imgSmall: "3QbMrwv",
      },
      {
        name: "Frozen Rapids",
        imgSmall: "3QebOxE",
      },
      {
        name: "Excavation Gateway",
        imgSmall: "49bAoIc",
      },
      {
        name: "Dwarven Gate",
        imgSmall: "3QdgpjD",
      },
      {
        name: "Dragons' Boneyard",
        imgSmall: "3QaaHiD",
      },
      {
        name: "Dragon's Power",
        imgSmall: "49apfHS",
      },
      {
        name: "Denas's Castle",
        imgSmall: "3tMBJ8h",
      },
      {
        name: "Corridors Of The Old City",
        imgSmall: "3Mi13cJ",
      },
      {
        name: "Clockwork Factory",
        imgSmall: "498LDRB",
      },
      {
        name: "City Of Rivers",
        imgSmall: "3Mc3xJG",
      },
      {
        name: "City Of Lozagon",
        imgSmall: "3MgfaPy",
      },
      {
        name: "Breaking The Ice",
        imgSmall: "40aV6DX",
      },
      {
        name: "Bolgur's Throne",
        imgSmall: "40cXfPt",
      },
      {
        name: "Back To The Rotten Forest",
        imgSmall: "40cM5dv",
      },
      {
        name: "Anurian Plaza",
        imgSmall: "479fLe9",
      },
      {
        name: "A Night In The Swamp",
        imgSmall: "3SdYf48",
      },
      {
        name: "Ancient Gate",
        imgSmall: "40ceror",
      },
    ],
    // Enemies
    enemiesKdr: [
      {
        name: "Goblin",
        imgSmall: "479grQF",
        imgInfo: "Enemy",
      },
      {
        name: "Orc",
        imgSmall: "3s9LbCb",
        imgInfo: "Enemy",
      },
      {
        name: "Shaman",
        imgSmall: "3rWxcQc",
        imgInfo: "Enemy",
      },
      {
        name: "Ogre",
        imgSmall: "46J0PUd",
        imgInfo: "Enemy",
      },
      {
        name: "Bandit",
        imgSmall: "3QeeknA",
        imgInfo: "Enemy",
      },
      {
        name: "Brigand",
        imgSmall: "46W09ui",
        imgInfo: "Enemy",
      },
      {
        name: "Marauder",
        imgSmall: "3FuL735",
        imgInfo: "Enemy",
      },
      {
        name: "Giant Spiders",
        imgSmall: "3tRBetK",
        imgInfo: "Enemy",
      },
      {
        name: "Spider Matriarch",
        imgSmall: "3FuXzj0",
        imgInfo: "Enemy",
      },
      {
        name: "Spider Hatchling",
        imgSmall: "3FxZ2Ft",
        imgInfo: "Enemy",
      },
      {
        name: "Gargoyle",
        imgSmall: "3QemfBm",
        imgInfo: "Enemy",
      },
      {
        name: "Shadow Archer",
        imgSmall: "496iQNL",
        imgInfo: "Enemy",
      },
      {
        name: "Dark Knight",
        imgSmall: "49aS5aK",
        imgInfo: "Enemy",
      },
      {
        name: "Wulf",
        imgSmall: "45O3VF9",
        imgInfo: "Enemy",
      },
      {
        name: "Worg",
        imgSmall: "3tUJZD1",
        imgInfo: "Enemy",
      },
      {
        name: "Golem Head",
        imgSmall: "3Sim9vd",
        imgInfo: "Enemy",
      },
      {
        name: "Hobgoblin Chief",
        imgSmall: "46KjhvC",
        imgInfo: "Enemy",
      },
      {
        name: "Winter Wolf",
        imgSmall: "3Mgi4nq",
        imgInfo: "Enemy",
      },
      {
        name: "Troll",
        imgSmall: "3MimaLM",
        imgInfo: "Enemy",
      },
      {
        name: "Troll Champion",
        imgSmall: "3Mg7Wel",
        imgInfo: "Enemy",
      },
      {
        name: "Troll Chieftain",
        imgSmall: "3MgwMuW",
        imgInfo: "Enemy",
      },
      {
        name: "Yeti",
        imgSmall: "45GnmzC",
        imgInfo: "Enemy",
      },
      {
        name: "Rocket Rider",
        imgSmall: "3tOX0OH",
        imgInfo: "Enemy",
      },
      {
        name: "Dark Slayer",
        imgSmall: "3QwBkja",
        imgInfo: "Enemy",
      },
      {
        name: "Demon Spawn",
        imgSmall: "3Qay23M",
        imgInfo: "Enemy",
      },
      {
        name: "Demon Lord",
        imgSmall: "3s91uiI",
        imgInfo: "Enemy",
      },
      {
        name: "Demon Hound",
        imgSmall: "3MeVaNn",
        imgInfo: "Enemy",
      },
      {
        name: "Demon Imp",
        imgSmall: "3tEAgAH",
        imgInfo: "Enemy",
      },
      {
        name: "Skeleton",
        imgSmall: "3SdZxfu",
        imgInfo: "Enemy",
      },
      {
        name: "Skeleton Knight",
        imgSmall: "3Qye7gk",
        imgInfo: "Enemy",
      },
      {
        name: "Necromancer",
        imgSmall: "3tGOyki",
        imgInfo: "Enemy",
      },
      {
        name: "Magma Elemental",
        imgSmall: "45KOXzE",
        imgInfo: "Enemy",
      },
      {
        name: "Son of Sarelgaz",
        imgSmall: "3FytsaC",
        imgInfo: "Enemy",
      },
      {
        name: "Goblin Sapper",
        imgSmall: "477UrFR",
        imgInfo: "Enemy",
      },
      {
        name: "Orc Champion",
        imgSmall: "3QvVtpz",
        imgInfo: "Enemy",
      },
      {
        name: "Worg Rider",
        imgSmall: "3MeVnQF",
        imgInfo: "Enemy",
      },
      {
        name: "Forest Troll",
        imgSmall: "3FuRzqC",
        imgInfo: "Enemy",
      },
      {
        name: "Husk",
        imgSmall: "3FveGl1",
        imgInfo: "Enemy",
      },
      {
        name: "Noxious Creeper",
        imgSmall: "3QeVMDV",
        imgInfo: "Enemy",
      },
      {
        name: "Mutated Hatchling",
        imgSmall: "45N3PNO",
        imgInfo: "Enemy",
      },
      {
        name: "Tainted Treant",
        imgSmall: "472eiWM",
        imgInfo: "Enemy",
      },
      {
        name: "Swamp Thing",
        imgSmall: "3s9LgFZ",
        imgInfo: "Enemy",
      },
      {
        name: "Raider",
        imgSmall: "46ZyWrb",
        imgInfo: "Enemy",
      },
      {
        name: "Pillager",
        imgSmall: "49bjNnO",
        imgInfo: "Enemy",
      },
      {
        name: "Troll Pathfinder",
        imgSmall: "3MfZNXy",
        imgInfo: "Enemy",
      },
      {
        name: "Troll Breaker",
        imgSmall: "3Mc6gCz",
        imgInfo: "Enemy",
      },
      {
        name: "Demon Legion",
        imgSmall: "3Qeeqvs",
        imgInfo: "Enemy",
      },
      {
        name: "Flareon",
        imgSmall: "45TZMQ8",
        imgInfo: "Enemy",
      },
      {
        name: "Gulaemon",
        imgSmall: "3QxyDxW",
        imgInfo: "Enemy",
      },
      {
        name: "Cerberus",
        imgSmall: "3QuOWeS",
        imgInfo: "Enemy",
      },
      {
        name: "Rotshroom",
        imgSmall: "498znAI",
        imgInfo: "Enemy",
      },
      {
        name: "Giant Rat",
        imgSmall: "472WcUt",
        imgInfo: "Enemy",
      },
      {
        name: "Wererat",
        imgSmall: "498AFM4",
        imgInfo: "Enemy",
      },
      {
        name: "Fallen Knight",
        imgSmall: "407ZaFf",
        imgInfo: "Enemy",
      },
      {
        name: "Spectral Knight",
        imgSmall: "3QdiHPL",
        imgInfo: "Enemy",
      },
      {
        name: "Black Hag",
        imgSmall: "3tOXiVN",
        imgInfo: "Enemy",
      },
      {
        name: "Sheep",
        imgSmall: "49c28fN",
        imgInfo: "Enemy",
      },
      {
        name: "The Juggernaut",
        imgSmall: "3s9LqNB",
        imgInfo: "Enemy",
      },
      {
        name: "J.T",
        imgSmall: "3Quwy5M",
        imgInfo: "Enemy",
      },
      {
        name: "Veznan",
        imgSmall: "409mZME",
        imgInfo: "Enemy",
      },
      {
        name: "Sarelgaz",
        imgSmall: "476TjlC",
        imgInfo: "Enemy",
      },
      {
        name: "Gul'Thak",
        imgSmall: "49bjSb6",
        imgInfo: "Enemy",
      },
      {
        name: "Greenmuck",
        imgSmall: "3tNlKqq",
        imgInfo: "Enemy",
      },
      {
        name: "The Kingpin",
        imgSmall: "40cSky5",
        imgInfo: "Enemy",
      },
      {
        name: "Ulguk-Hai",
        imgSmall: "3Mc5WUI",
        imgInfo: "Enemy",
      },
      {
        name: "Moloch",
        imgSmall: "3SikVjB",
        imgInfo: "Enemy",
      },
      {
        name: "Myconid",
        imgSmall: "474rQ49",
        imgInfo: "Enemy",
      },
      {
        name: "Lord Blackburn",
        imgSmall: "3SeGku1",
        imgInfo: "Enemy",
      },
    ],

    enemiesFrontiers: [
      {
        name: "Abomination",
        imgSmall: "45GkXF6",
        imgInfo: "Enemy",
      },
      {
        name: "Anoobis",
        imgSmall: "45M1oer",
        imgInfo: "Enemy",
      },
      {
        name: "Bat",
        imgSmall: "45LpYMw",
        imgInfo: "Enemy",
      },
      {
        name: "Blacksurge",
        imgSmall: "45QbScK",
        imgInfo: "Enemy",
      },
      {
        name: "Bloodshell",
        imgSmall: "3FxIZHK",
        imgInfo: "Enemy",
      },
      {
        name: "Blood Trickster",
        imgSmall: "3Q3OmDa",
        imgInfo: "Enemy",
      },
      {
        name: "Bluegale",
        imgSmall: "45JHuks",
        imgInfo: "Enemy",
      },
      {
        name: "Desert Archer",
        imgSmall: "45TXy3e",
        imgInfo: "Enemy",
      },
      {
        name: "Desert Thug",
        imgSmall: "45KWBtY",
        imgInfo: "Enemy",
      },
      {
        name: "Deviltide",
        imgSmall: "45OCwme",
        imgInfo: "Enemy",
      },
      {
        name: "Dune Raider",
        imgSmall: "3FDCcMt",
        imgInfo: "Enemy",
      },
      {
        name: "Dune Terror",
        imgSmall: "3Fvwoof",
        imgInfo: "Enemy",
      },
      {
        name: "Earth Shaman",
        imgSmall: "495ToIf",
        imgInfo: "Enemy",
      },
      {
        name: "Executioner",
        imgSmall: "46BEbwR",
        imgInfo: "Enemy",
      },
      {
        name: "Ghost",
        imgSmall: "497Ocn0",
        imgInfo: "Enemy",
      },
      {
        name: "Ghoul",
        imgSmall: "46QLSQ4",
        imgInfo: "Enemy",
      },
      {
        name: "Giant Scorpion",
        imgSmall: "472RDK6",
        imgInfo: "Enemy",
      },
      {
        name: "Giant Wasp",
        imgSmall: "3FyJXUe",
        imgInfo: "Enemy",
      },
      {
        name: "Giant Wasp Queen",
        imgSmall: "3FuVsM6",
        imgInfo: "Enemy",
      },
      {
        name: "Gorillon",
        imgSmall: "475uSVS",
        imgInfo: "Enemy",
      },
      {
        name: "Greenfin",
        imgSmall: "475Y676",
        imgInfo: "Enemy",
      },
      {
        name: "Gunboat",
        imgSmall: "46BEhEJ",
        imgInfo: "Enemy",
      },
      {
        name: "Immortal",
        imgSmall: "46PBbgr",
        imgInfo: "Enemy",
      },
      {
        name: "Jack'O Lantern",
        imgSmall: "3MikiCK",
        imgInfo: "Enemy",
      },
      {
        name: "Jungle Matriarch",
        imgSmall: "3Me42Te",
        imgInfo: "Enemy",
      },
      {
        name: "Jungle Spider",
        imgSmall: "3Mijdeq",
        imgInfo: "Enemy",
      },
      {
        name: "Lesser Efreeti",
        imgSmall: "407X08B",
        imgInfo: "Enemy",
      },
      {
        name: "Leviathan",
        imgSmall: "3s6BLr3",
        imgInfo: "Enemy",
      },
      {
        name: "Lycan",
        imgSmall: "3Me3NaM",
        imgInfo: "Enemy",
      },
      {
        name: "Mandrilos",
        imgSmall: "46LhUg3",
        imgInfo: "Enemy",
      },
      {
        name: "Fallen",
        imgSmall: "3tPC2PK",
        imgInfo: "Enemy",
      },
      {
        name: "Nazeru",
        imgSmall: "3MfXvHW",
        imgInfo: "Enemy",
      },
      {
        name: "Parasyte",
        imgSmall: "3QvvluR",
        imgInfo: "Enemy",
      },
      {
        name: "Phantom Warrior",
        imgSmall: "3QvILqH",
        imgInfo: "Enemy",
      },
      {
        name: "Poukai",
        imgSmall: "3QaaWu3",
        imgInfo: "Enemy",
      },
      {
        name: "Poukai Rider",
        imgSmall: "3QwzjDC",
        imgInfo: "Enemy",
      },
      {
        name: "Quincon",
        imgSmall: "3Qvzor0",
        imgInfo: "Enemy",
      },
      {
        name: "Reaper",
        imgSmall: "3s8ZpmU",
        imgInfo: "Enemy",
      },
      {
        name: "Reaper Lord",
        imgSmall: "3Qx9pQ4",
        imgInfo: "Enemy",
      },
      {
        name: "Redspine",
        imgSmall: "Redspine",
        imgInfo: "Enemy",
      },
      {
        name: "Sand Hound",
        imgSmall: "3SeE85L",
        imgInfo: "Enemy",
      },
      {
        name: "Sand Wraith",
        imgSmall: "3MEeZht",
        imgInfo: "Enemy",
      },
      {
        name: "Saurian Blazefang",
        imgSmall: "3SeqWxB",
        imgInfo: "Enemy",
      },
      {
        name: "Saurian Broodguard",
        imgSmall: "3MgfFJq",
        imgInfo: "Enemy",
      },
      {
        name: "Saurian Brute",
        imgSmall: "3rXCWsZ",
        imgInfo: "Enemy",
      },
      {
        name: "Saurian Darter",
        imgSmall: "3tIzfrj",
        imgInfo: "Enemy",
      },
      {
        name: "Saurian Deathcoil",
        imgSmall: "471rSK4",
        imgInfo: "Enemy",
      },
      {
        name: "Saurian Myrmidon",
        imgSmall: "476RkxG",
        imgInfo: "Enemy",
      },
      {
        name: "Saurian Nightscale",
        imgSmall: "472ayoc",
        imgInfo: "Enemy",
      },
      {
        name: "Saurian Quetzal",
        imgSmall: "477QZuT",
        imgInfo: "Enemy",
      },
      {
        name: "Saurian Razorwing",
        imgSmall: "3QvvzlH",
        imgInfo: "Enemy",
      },
      {
        name: "Saurian Savant",
        imgSmall: "472qM0H",
        imgInfo: "Enemy",
      },
      {
        name: "Savage Brute",
        imgSmall: "472am8s",
        imgInfo: "Enemy",
      },
      {
        name: "Savage Hunter",
        imgSmall: "479gc8h",
        imgInfo: "Enemy",
      },
      {
        name: "Savage Warrior",
        imgSmall: "475vevG",
        imgInfo: "Enemy",
      },
      {
        name: "Savage Zombie",
        imgSmall: "46FeOKy",
        imgInfo: "Enemy",
      },
      {
        name: "Shade Elemental",
        imgSmall: "472RYfQ",
        imgInfo: "Enemy",
      },
      {
        name: "Shred Of Darkness",
        imgSmall: "46ZA51g",
        imgInfo: "Enemy",
      },
      {
        name: "Snapvine",
        imgSmall: "3Sa1zNF",
        imgInfo: "Enemy",
      },
      {
        name: "Spiderling",
        imgSmall: "3SekrLx",
        imgInfo: "Enemy",
      },
      {
        name: "Spirit Shaman",
        imgSmall: "3SdYMTG",
        imgInfo: "Enemy",
      },
      {
        name: "Umbra",
        imgSmall: "46HhbwD",
        imgInfo: "Enemy",
      },
      {
        name: "Vampiresa",
        imgSmall: "3SgV6QW",
        imgInfo: "Enemy",
      },
      {
        name: "Vasile",
        imgSmall: "3rXD5g1",
        imgInfo: "Enemy",
      },
      {
        name: "War Hound",
        imgSmall: "495TK1x",
        imgInfo: "Enemy",
      },
      {
        name: "Werewolf",
        imgSmall: "49bhEZi",
        imgInfo: "Enemy",
      },
      {
        name: "Witch Doctor",
        imgSmall: "45RIi6B",
        imgInfo: "Enemy",
      },
      {
        name: "Xyzzy",
        imgSmall: "3tKHzqO",
        imgInfo: "Enemy",
      },
      {
        name: "Zombie",
        imgSmall: "45JHGQI",
        imgInfo: "Enemy",
      },
    ],

    enemiesOrigins: [
      {
        name: "Arachnomancer",
        imgSmall: "3tKQU1I",
        imgInfo: "Enemy",
      },
      {
        name: "Baj'Nimen The Hateful",
        imgSmall: "474pZfH",
        imgInfo: "Enemy",
      },
      {
        name: "Bandersnatch",
        imgSmall: "45GA9SJ",
        imgInfo: "Enemy",
      },
      {
        name: "Blood Gnoll",
        imgSmall: "3s5L4HI",
        imgInfo: "Enemy",
      },
      {
        name: "Blood Ogre",
        imgSmall: "3FyuPpE",
        imgInfo: "Enemy",
      },
      {
        name: "Blood Servant",
        imgSmall: "45M2ruT",
        imgInfo: "Enemy",
      },
      {
        name: "Boomshroom",
        imgSmall: "45GlJlu",
        imgInfo: "Enemy",
      },
      {
        name: "Bram The Beheader",
        imgSmall: "3FQNHk9",
        imgInfo: "Enemy",
      },
      {
        name: "Bunny",
        imgSmall: "475ELml",
        imgInfo: "Enemy",
      },
      {
        name: "Cloud Stalker",
        imgSmall: "3MitgA6",
        imgInfo: "Enemy",
      },
      {
        name: "Dark Spitter",
        imgSmall: "46Ff4t0",
        imgInfo: "Enemy",
      },
      {
        name: "Devourer",
        imgSmall: "3tJsPbz",
        imgInfo: "Enemy",
      },
      {
        name: "Drider",
        imgSmall: "3MijG0a",
        imgInfo: "Enemy",
      },
      {
        name: "Ettin",
        imgSmall: "49apVNq",
        imgInfo: "Enemy",
      },
      {
        name: "Fungus Breeder",
        imgSmall: "492yJot",
        imgInfo: "Enemy",
      },
      {
        name: "Gloomy",
        imgSmall: "3MeTun3",
        imgInfo: "Enemy",
      },
      {
        name: "Gnoll Blighter",
        imgSmall: "3Qar4vy",
        imgInfo: "Enemy",
      },
      {
        name: "Gnoll Burner",
        imgSmall: "3MfsIuK",
        imgInfo: "Enemy",
      },
      {
        name: "Gnoll Catapult",
        imgSmall: "3MfXqny",
        imgInfo: "Enemy",
      },
      {
        name: "Gnoll Gnawer",
        imgSmall: "3s6CpVv",
        imgInfo: "Enemy",
      },
      {
        name: "Gnoll Reaver",
        imgSmall: "3QeI7Na",
        imgInfo: "Enemy",
      },
      {
        name: "Gnoll Warleader",
        imgSmall: "3QugFfF",
        imgInfo: "Enemy",
      },
      {
        name: "Godieth",
        imgSmall: "3MhMrKb",
        imgInfo: "Enemy",
      },
      {
        name: "Hi-Hi Enha",
        imgSmall: "3QvTYYt",
        imgInfo: "Enemy",
      },
      {
        name: "Hyena",
        imgSmall: "3MeTIup",
        imgInfo: "Enemy",
      },
      {
        name: "Malicia",
        imgSmall: "3QzW8GI",
        imgInfo: "Enemy",
      },
      {
        name: "Mounted Avenger",
        imgSmall: "499O4n5",
        imgInfo: "Enemy",
      },
      {
        name: "Munchshroom",
        imgSmall: "499O8Dl",
        imgInfo: "Enemy",
      },
      {
        name: "Ogre Magi",
        imgSmall: "3tExj35",
        imgInfo: "Enemy",
      },
      {
        name: "Perython",
        imgSmall: "3S9iD6p",
        imgInfo: "Enemy",
      },
      {
        name: "Razorboar",
        imgSmall: "3SgrJ1m",
        imgInfo: "Enemy",
      },
      {
        name: "Redcap",
        imgSmall: "3tGLBAe",
        imgInfo: "Enemy",
      },
      {
        name: "Satyr Cutthroat",
        imgSmall: "475YPFm",
        imgInfo: "Enemy",
      },
      {
        name: "Satyr Hoplite",
        imgSmall: "3ScQPOm",
        imgInfo: "Enemy",
      },
      {
        name: "Scourger Banshee",
        imgSmall: "46HhBTJ",
        imgInfo: "Enemy",
      },
      {
        name: "Screecher Bat",
        imgSmall: "46LCDQV",
        imgInfo: "Enemy",
      },
      {
        name: "Shadow Champion",
        imgSmall: "46Losvl",
        imgInfo: "Enemy",
      },
      {
        name: "Shadowspawn",
        imgSmall: "46LCFs1",
        imgInfo: "Enemy",
      },
      {
        name: "Son Of Mactans",
        imgSmall: "3tKrzVz",
        imgInfo: "Enemy",
      },
      {
        name: "Spiderbrood",
        imgSmall: "474qqGR",
        imgInfo: "Enemy",
      },
      {
        name: "Spider Goddess",
        imgSmall: "4744RWL",
        imgInfo: "Enemy",
      },
      {
        name: "Sword Spider",
        imgSmall: "47nQkpl",
        imgInfo: "Enemy",
      },
      {
        name: "Twilight Avenger",
        imgSmall: "3tGLNiW",
        imgInfo: "Enemy",
      },
      {
        name: "Twilight Brute",
        imgSmall: "45HmVox",
        imgInfo: "Enemy",
      },
      {
        name: "Twilight Evoker",
        imgSmall: "476IY9g",
        imgInfo: "Enemy",
      },
      {
        name: "Twilight Golem",
        imgSmall: "408HYPV",
        imgInfo: "Enemy",
      },
      {
        name: "Twilight Harasser",
        imgSmall: "45IwweR",
        imgInfo: "Enemy",
      },
      {
        name: "Twilight Heretic",
        imgSmall: "45IwzHz",
        imgInfo: "Enemy",
      },
      {
        name: "Twilight Scourger",
        imgSmall: "3tJt9XP",
        imgInfo: "Enemy",
      },
      {
        name: "Webspitter Spider",
        imgSmall: "495iFSJ",
        imgInfo: "Enemy",
      },
      {
        name: "Zealot",
        imgSmall: "46HUFDJ",
        imgInfo: "Enemy",
      },
    ],

    enemiesVengeance: [
      {
        name: "Alleria Swiftwind Enemy",
        imgSmall: "3tOVMTB",
      },
      {
        name: "Anurian Channeler",
        imgSmall: "49bYXVp",
      },
      {
        name: "Anurian Chaser",
        imgSmall: "46LQre8",
      },
      {
        name: "Anurian Erudite",
        imgSmall: "46BFrA5",
      },
      {
        name: "Anurian Infuser",
        imgSmall: "499OqKr",
      },
      {
        name: "Anurian Warden",
        imgSmall: "492yY2R",
      },
      {
        name: "Apex Shard",
        imgSmall: "407XFH7",
      },
      {
        name: "Apex Stalker",
        imgSmall: "3Qat8Uu",
      },
      {
        name: "Arcane Magus",
        imgSmall: "3tLlc4z",
      },
      {
        name: "Baa San",
        imgSmall: "40cR9i9",
      },
      {
        name: "Blue Wyvern",
        imgSmall: "3Qdw5mX",
      },
      {
        name: "Bone Carrier",
        imgSmall: "3QjAFjY",
      },
      {
        name: "Carnival Dragon",
        imgSmall: "3QeYLvQ",
      },
      {
        name: "Cavalier",
        imgSmall: "40dJLmw",
      },
      {
        name: "Cave Dwarf",
        imgSmall: "3tPCTzW",
      },
      {
        name: "Chomp Bot",
        imgSmall: "3tKIoQq",
      },
      {
        name: "Clockwork Spider",
        imgSmall: "3tOr3Gl",
      },
      {
        name: "Corrosive Soul",
        imgSmall: "40cYzlp",
      },
      {
        name: "Crystal Amphiptere",
        imgSmall: "40cYONl",
      },
      {
        name: "Crystal Demolisher",
        imgSmall: "3SfWQKq",
      },
      {
        name: "Cyclopter",
        imgSmall: "3FtGciO",
      },
      {
        name: "Devoted Priest",
        imgSmall: "40dJPmg",
      },
      {
        name: "Draugr",
        imgSmall: "3rXDCi1",
      },
      {
        name: "Dwarf Bruiser",
        imgSmall: "3FuW2JM",
      },
      {
        name: "Elven Ranger",
        imgSmall: "3QeIxmI",
      },
      {
        name: "Farmer",
        imgSmall: "3FxJP7m",
      },
      {
        name: "Footman",
        imgSmall: "3S9je89",
      },
      {
        name: "Frost Giant",
        imgSmall: "3SlCnDI",
      },
      {
        name: "Frozen Heart",
        imgSmall: "3QvVZTt",
      },
      {
        name: "Frozen Soul",
        imgSmall: "3FBVj9G",
      },
      {
        name: "Ghost Enemy",
        imgSmall: "471Aosv",
      },
      {
        name: "Glacial Wolf",
        imgSmall: "3FuQbUW",
      },
      {
        name: "Golem House",
        imgSmall: "3Q5NoGG",
      },
      {
        name: "Gryphon Bombardier",
        imgSmall: "3Ftex1v",
      },
      {
        name: "Haunted Skeleton",
        imgSmall: "3Me4HEc",
      },
      {
        name: "High Sorcerer",
        imgSmall: "3tGLSTM",
      },
      {
        name: "Human Woodcutter",
        imgSmall: "45QcwHc",
      },
      {
        name: "Human Worker",
        imgSmall: "3MhMAxd",
      },
      {
        name: "Hunting Eagle",
        imgSmall: "3FQNZYh",
      },
      {
        name: "Ice Reaper",
        imgSmall: "476QL7k",
      },
      {
        name: "Ice Witch",
        imgSmall: "45RJdUB",
      },
      {
        name: "Joe Jenkins",
        imgSmall: "45FOFtO",
      },
      {
        name: "Leap Dragon",
        imgSmall: "471t93O",
      },
      {
        name: "Lich",
        imgSmall: "45NXAcT",
      },
      {
        name: "Mecha Dwarf MK.9",
        imgSmall: "3Mc5mpF",
      },
      {
        name: "Mogwai",
        imgSmall: "3Fysco4",
      },
      {
        name: "Musketeer",
        imgSmall: "3FxqO4Q",
      },
      {
        name: "Nanoq Warbear",
        imgSmall: "3FxYVd6",
      },
      {
        name: "Nian",
        imgSmall: "3FvPlqX",
      },
      {
        name: "Northern Berserker",
        imgSmall: "3tNvmBy",
      },
      {
        name: "Northern Huntress",
        imgSmall: "46KgEKg",
      },
      {
        name: "Northern Wildling",
        imgSmall: "3FxGhSp",
      },
      {
        name: "Paladin",
        imgSmall: "3FA6fVz",
      },
      {
        name: "Prehistoric Dwarf",
        imgSmall: "3FxYjEf",
      },
      {
        name: "Pterodactyl",
        imgSmall: "3MildTI",
      },
      {
        name: "Quarry Worker",
        imgSmall: "3sac74H",
      },
      {
        name: "Recruit",
        imgSmall: "3Milfei",
      },
      {
        name: "Screecher Bat",
        imgSmall: "3tW824s",
      },
      {
        name: "Sheep",
        imgSmall: "45Lrv5e",
      },
      {
        name: "Shieldbearer",
        imgSmall: "45RJs1X",
      },
      {
        name: "Smokebeard Engineer",
        imgSmall: "45Lro9O",
      },
      {
        name: "Snow Golem",
        imgSmall: "496Thw0",
      },
      {
        name: "Stonebeard Geomancer",
        imgSmall: "3tNc5jF",
      },
      {
        name: "Sulfur Alchemist",
        imgSmall: "49bS8n4",
      },
      {
        name: "Svell Druid",
        imgSmall: "3s5Ehhk",
      },
      {
        name: "Tinbeard Gunman",
        imgSmall: "3Qy53Zc",
      },
      {
        name: "Troop Captain",
        imgSmall: "3MEfLen",
      },
      {
        name: "Valkyrie",
        imgSmall: "495UsvJ",
      },
      {
        name: "Velociraptor",
        imgSmall: "3MhMPID",
      },
      {
        name: "Warhammer Guard",
        imgSmall: "3s3HHRH",
      },
      {
        name: "War Wagon",
        imgSmall: "3Qwu5I5",
      },
      {
        name: "Watchdog",
        imgSmall: "3MgPvGz",
      },
      {
        name: "Werewolf Enemy",
        imgSmall: "3Mizksd",
      },
      {
        name: "Winter Lord",
        imgSmall: "3Mgvxfg",
      },
      {
        name: "Ancient Ghost",
        imgSmall: "40fqmlh",
      },
      {
        name: "Ancient Ghost 2",
        imgSmall: "3MikrX4",
      },
      {
        name: "Bolgur",
        imgSmall: "49c5cZB",
      },
      {
        name: "Dragon King",
        imgSmall: "3MfN9b5",
      },
      {
        name: "Gerald",
        imgSmall: "3Mg6KaR",
      },
      {
        name: "Great-T",
        imgSmall: "3Mgh4zG",
      },
      {
        name: "Jokull",
        imgSmall: "408nmap",
      },
      {
        name: "Paragon",
        imgSmall: "3Mc5G7R",
      },
      {
        name: "Polyx the Wise",
        imgSmall: "3MhtF5X",
      },
      {
        name: "The Winter Queen",
        imgSmall: "3tOkcws",
      },
    ],
    // assist
    assist: [
      {
        name: "Magic Blossom",
        imgSmall: "3QwZU3o",
      },
    ],
  };

  // renderSections
  renderSections();
  renderLinks();

  function renderSections() {
    const renderTag = document.getElementById("hqd_render_sections");
    if (!renderTag) return;
    let html = "";
    const convertText = renderTag.innerText.trim().split(",");
    const originalName = convertText[0];
    const skillsData = bigData[originalName]?.skills;
    const statsData = bigData[originalName]?.stats;
    const achievementsData = bigData[originalName]?.achievements;
    const upgrade = bigData[originalName]?.upgrades;
    const upgradesItems = upgradesData[convertText[1]?.trim()];
    if (skillsData) {
      html += `<div class="hqd_abilities"><div><h2>Kỹ năng của ${originalName}</h2></div>${renderSkills(
        skillsData
      )}</div>`;
    }
    if (statsData) {
      html += `<div class="hqd_stats"><div><h2>Thống kê chỉ số của ${originalName}</h2></div>${renderStats(
        statsData,
        undefined,
        bigData[originalName].imgArr
      )}</div>`;
    }
    if (upgrade) {
      html += `<div class="hqd_upgrades"><div><h2>Cây Upgrades liên quan</h2></div>${renderSkills(
        upgrade
      )}</div>`;
    }
    if (upgradesItems) {
      html += `<div class="hqd_upgrades"><div><h2>Cây Upgrades liên quan</h2></div>${renderSkills(
        upgradesItems
      )}</div>`;
    }
    if (achievementsData) {
      html += `<div class="hqd_achievements"><div><h2>Thành tựu liên quan</h2></div>${renderSkills(
        achievementsData
      )}</div>`;
    }
    renderTag.outerHTML = html;
  }

  function renderLinks() {
    const bTags = document.querySelectorAll(".hqd_render_post b");
    const dataArr = Object.values(bigData).flat();
    // console.log(bTags, dataArr)
    for (const bTag of bTags) {
      const originalText = bTag.innerText;
      for (const obj of dataArr) {
        const name = obj.name;
        const imgInfo = obj.imgInfo;
        const link = obj.link;
        if (originalText === name) {
          bTag.outerHTML = `
            <span class="hqd_card_wrapper">
              <span class="hqd_card_small">
                <span>
                  <img
                    src="https://bit.ly/${obj.imgSmall}"
                    alt="${imgInfo ? `${imgInfo} ${name}` : name}"
                  />
                </span>
              </span>
               ${
                 link
                   ? `<a href="${link}" title="${obj.linkTitle}">${name}</a>`
                   : `<span>${name}</span>`
               }
            </span>
            `;
          break;
        }
      }
    }
  }
  // Render Table
  function renderTable(data, tableImg, imgArr) {
    const rows = data.trim().split("\n");
    const headers = rows[0].split("\t");
    const tableData = rows.slice(1).map((row) => row.split("\t"));
    return `
  <div class='hqd_table_wrapper'>
  <table>
  <tr>
    ${
      tableImg
        ? `<th rowspan="${
            tableData.length + 1
          }"><img src="https://bit.ly/${tableImg}" alt="kingdom rush wiki" /></th>`
        : ""
    }
    ${headers.map((headerText) => `<th>${headerText}</th>`).join("")}
  </tr>
  ${tableData
    .map(
      (rowData, index) => `
    <tr>
      ${rowData
        .map((cellData) =>
          cellData.trim() === "imgArr"
            ? `<td><div><img src=https://bit.ly/${
                imgArr ? imgArr[index] : ""
              } alt="" width="100px" height="100px" /></div></td>`
            : `<td>${cellData}</td>`
        )
        .join("")}
    </tr>
  `
    )
    .join("")}
  </table>
  </div>
  `;
  }

  // Render Stats
  function renderStats(data, tableImg, imgArr) {
    return renderTable(data, tableImg, imgArr);
  }
  // Render Skills
  function renderSkills(data) {
    return data
      .map((obj) => {
        const name = obj.name;
        const subName = obj.subName;
        const describe = obj.describe;
        const imgFirst = obj.imgFirst;
        const imgLast = obj.imgLast;
        const table = obj.table;
        const table2 = obj.table2;
        const note = obj.note;
        return `
  <div class="hqd_skill">
        ${
          obj.heroSpell
            ? `<div class="hqd_hero_spell"><h3>Phép thuật tối thượng</h3></div>`
            : ""
        }
        <div class="hqd_skill_title">
        ${
          imgFirst
            ? `<div><img src="https://bit.ly/${imgFirst}" alt="${name}" /></div>`
            : ""
        }
          <div><h3>${name}</h3></div>
        ${
          imgLast
            ? `<div><img src="https://bit.ly/${imgLast}" alt="${name}" /></div>`
            : ""
        }
        </div>
        ${subName ? `<div>${subName}</div>` : ""}
        <div>${describe}</div>
        ${table ? renderTable(table, obj.tableImg) : ""}
        ${table2 ? renderTable(table2, obj.tableImg2) : ""}
        ${note ? note : ""}
  </div>
  `;
      })
      .join("");
  }
}
