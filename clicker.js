public class ClickerGame extends javax.swing.JFrame {
    int i,j;
    JPanel panel;
    JFrame frame;
    JButton start;
    JButton stop;
    JButton click;
    JTextArea text;
    JLabel label;
    public static void main(String[] args){
        ClickerGame a = new ClickerGame();
        a.go();
    }

    public void go(){
         frame = new JFrame();
         frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

         JPanel panel = new JPanel();

         click = new JButton("Click");
         click.addActionListener(new ClickListener());

         start=new JButton("Start");
         start.addActionListener(new StartListener());

         stop=new JButton("Stop");
         stop.addActionListener(new StopListener());
         panel.add(start);
         panel.add(click);
         panel.add(label);
         frame.getContentPane().add(BorderLayout.CENTER,panel);

         frame.setSize(500,500);
         frame.setVisible(true);
    }
    class ClickListener implements ActionListener{
        public void actionPerformed(ActionEvent event){

            click.setText("Number of clicks: "+i);
            i++;
        }

        }

    Timer timer = new Timer(1000,new ActionListener(){
        public void actionPerformed(ActionEvent e){
            Date currentTime = new Date();
            label= new JLabel(currentTime.toString());


        }
    });

    class StartListener implements ActionListener{
        public void actionPerformed(ActionEvent event){
            timer.start();
        }
    }
    class StopListener implements ActionListener{
        public void actionPerformed(ActionEvent event){
            timer.stop();
        }
    }

}